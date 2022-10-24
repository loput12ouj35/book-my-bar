import { Comment } from 'common/types/comment'

interface UseCommentListReturn {
  comments?: Comment[]
  onDelete: (comment: Comment) => Promise<void>
}

export type UseCommentList = () => UseCommentListReturn
