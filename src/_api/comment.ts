import { Comment } from 'common/types/comment'
import fetcher from 'common/utils/fetcher'
import { noop } from 'common/utils/functions'

const PATH = '/api/comment'

export const getComments = (queryString: string): Promise<Comment[]> => fetcher.get(`${PATH}?${queryString}`)

export const createComment = (url: string, text: string, token: string): Promise<void> =>
  fetcher.post(
    PATH,
    {
      body: { url, text },
      headers: { Authorization: token },
    },
    noop
  )

export const deleteComment = (url: string, comment: Comment, token: string): Promise<void> =>
  fetcher.delete(
    PATH,
    {
      body: { url, comment },
      headers: { Authorization: token },
    },
    noop
  )
