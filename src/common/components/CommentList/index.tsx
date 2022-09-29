import { DeleteTwoTone } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Comment, Space } from 'antd'
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
            author={comment.user.name}
            datetime={<time>{distanceToNow(new Date(comment.createdAt))}</time>}
            avatar={<Avatar src={user?.picture} />}
            content={comment.text}
            actions={
              isAdmin || isAuthor
                ? [
                    <Button
                      key="delete"
                      size="small"
                      shape="round"
                      icon={<DeleteTwoTone />}
                      onClick={() => onDelete(comment)}
                    >
                      지우기
                    </Button>,
                  ]
                : null
            }
          />
        )
      })}
    </Space>
  )
}

export default CommentList
