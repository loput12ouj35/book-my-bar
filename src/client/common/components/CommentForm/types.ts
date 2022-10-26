import { CreateCommentRequestBody } from 'common/types/comment'

interface UseCommentFormReturns {
  submitting: boolean
  onSubmit: (value: CommentForm) => void
}

export type UseCommentForm = () => UseCommentFormReturns

export type CommentForm = Pick<CreateCommentRequestBody, 'text'>
