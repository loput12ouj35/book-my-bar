import { User } from '@auth0/auth0-react'

type Timestamp = number

/** 실제 DB에 저장되는 댓글은 유저의 메일 주소 정보를 포함한다. */
export interface CommentInDB {
  type: 'comment'
  id: string
  /** 생성일 타임스탬프 */
  createdAt: Timestamp
  /** 어느 글 Url의 댓글인지 */
  url: string
  /** 댓글 내용 */
  text: string
  user: Pick<User, 'name' | 'picture' | 'sub' | 'email'>
}

export interface Comment extends Omit<CommentInDB, 'user'| 'type'> {
  user: Pick<User, 'name' | 'picture' | 'sub'>
}
