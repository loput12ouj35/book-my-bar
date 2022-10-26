import { DeleteOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Comment, Popconfirm, Skeleton, Space, Tag } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'
import { useCommentList } from './hooks'

import distanceToNow from 'server/dateRelative'

const CommentList: FC = () => {
  const { comments, isValidating, onDelete } = useCommentList()
  const { user = {} } = useAuth0()
  const { isAdmin = false } = user
  const empty = comments.length === 0

  return isValidating && empty ? (
    <Skeleton loading active avatar />
  ) : empty ? (
    <>댓글이 없는 이슈</>
  ) : (
    <Space direction="vertical">
      {comments.map((comment, i) => {
        const isAuthor = user.sub === comment.user.sub
        return (
          <Comment
            key={i}
            author={
              <Space>
                {comment.user.name}
                {isAdmin && (
                  <Tag color="blue" className={styles.adminTag}>
                    관리자
                  </Tag>
                )}
              </Space>
            }
            datetime={
              <Space>
                <time>{distanceToNow(new Date(comment.createdAt))}</time>
                {(isAdmin || isAuthor) && (
                  <Popconfirm
                    title="댓글을 지울까요?"
                    onConfirm={() => onDelete(comment)}
                    okText="지우기"
                    cancelText="닫기"
                  >
                    <DeleteOutlined />
                  </Popconfirm>
                )}
              </Space>
            }
            avatar={<Avatar src={user.picture} />}
            content={comment.text}
          />
        )
      })}
    </Space>
  )
}

export default CommentList
