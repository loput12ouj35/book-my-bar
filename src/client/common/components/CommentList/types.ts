import { Comment } from 'common/types/comment'

interface UseCommentListReturn {
  comments: Comment[]
  isValidating: boolean
  onDelete: (comment: Comment) => Promise<void>
}

export type UseCommentList = () => UseCommentListReturn
