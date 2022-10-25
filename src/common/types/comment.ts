import { User, WithRawUser } from './user'

type Timestamp = number

export interface Comment {
  id: string
  /** 생성일 타임스탬프 */
  createdAt: Timestamp
  /** 어느 글 Url의 댓글인지 */
  url: string
  /** 댓글 내용 */
  text: string
  user: User
}

export type RawComment = WithRawUser<Comment>

export type GetCommentsRequestQuery = Pick<Comment, 'url'>

export type CreateCommentRequestBody = Pick<Comment, 'url' | 'text'>

export interface DeleteCommentRequestBody {
  url: string
  comment: Comment
}
