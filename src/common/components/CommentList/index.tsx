import { DeleteOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Comment, Popconfirm, Space, Tag } from 'antd'
import { FC } from 'react'

import { useCommentList } from './hooks'

import distanceToNow from 'lib/dateRelative'

const CommentList: FC = () => {
  const { comments, onDelete } = useCommentList()
  const { user } = useAuth0()

  const isAdmin = user?.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL

  return (
    <Space direction="vertical">
      {comments.map((comment, i) => {
        const isAuthor = user?.sub === comment.user.sub
        return (
          <Comment
            key={i}
            author={
              <Space>
                {comment.user.name}
                {isAdmin && (
                  <Tag color="blue" style={{ fontSize: 10, lineHeight: '16px' }}>
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
            avatar={<Avatar src={user?.picture} />}
            content={comment.text}
          />
        )
      })}
    </Space>
  )
}

export default CommentList
