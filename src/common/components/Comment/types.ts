import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react'

import { Comment } from 'common/types/comment'

interface UseCommentsReturn {
  text: string
  setText: Dispatch<SetStateAction<string>>
  comments: Comment[]
  onSubmit: ComponentPropsWithoutRef<'form'>['onSubmit']
  onDelete: (comment: Comment) => Promise<void>
}

export type UseComments = () => UseCommentsReturn

export type CommentFormProps = Pick<UseCommentsReturn, 'text' | 'setText' | 'onSubmit'>

export type CommentListProps = Pick<UseCommentsReturn, 'comments' | 'onDelete'>
