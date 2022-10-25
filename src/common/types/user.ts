import { User as Auth0User } from '@auth0/auth0-react'

/** 실제 DB에 저장되는 댓글은 유저의 메일 주소 정보를 포함한다. */
type RawUser = Pick<Auth0User, 'name' | 'picture' | 'sub' | 'email'>

/** 클라이언트 단에서는 유저의 이메일 주소를 보여주면 안 된다. */
export type User = Omit<RawUser, 'email'>

export type WithRawUser<T> = Omit<T, 'user'> & { user: RawUser }
