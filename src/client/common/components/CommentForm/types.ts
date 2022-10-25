interface UseCommentFormReturns {
  submitting: boolean
  onSubmit: (value: CommentForm) => void
}

export type UseCommentForm = () => UseCommentFormReturns

export interface CommentForm {
  text: string
}
