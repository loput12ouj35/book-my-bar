import {
  Comment,
  CreateCommentRequestBody,
  DeleteCommentRequestBody,
  GetCommentsRequestQuery,
} from 'common/types/comment'
import fetcher from 'common/utils/fetcher'
import { noop } from 'common/utils/functions'

const PATH = '/api/comment'

export const getComments = (query: GetCommentsRequestQuery): Promise<Comment[]> => {
  const queryString = new URLSearchParams(query).toString()
  return fetcher.get(`${PATH}?${queryString}`)
}

export const createComment = (body: CreateCommentRequestBody, token: string): Promise<void> =>
  fetcher.post(PATH, { body, headers: { Authorization: token } }, noop)

export const deleteComment = (body: DeleteCommentRequestBody, token: string): Promise<void> =>
  fetcher.delete(PATH, { body, headers: { Authorization: token } }, noop)
