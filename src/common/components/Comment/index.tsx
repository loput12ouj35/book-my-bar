import { FC } from 'react'

import CommentForm from './form'
import { useComments } from './hooks'
import CommentList from './list'

const Comment: FC = () => {
  const { text, setText, comments, onSubmit, onDelete } = useComments()

  return (
    <div className="mt-20">
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  )
}

export default Comment
