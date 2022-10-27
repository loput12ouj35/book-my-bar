import { NextApiHandler } from 'next'

import { redis } from '../redis'

import { Comment, GetCommentsRequestQuery, RawComment } from 'common/types/comment'
import { ServerError } from 'common/types/serverError'

const fetchComment: NextApiHandler<Comment[] | ServerError> = async (req, res) => {
  const { url } = req.query as GetCommentsRequestQuery

  if (!url || Array.isArray(url)) return res.status(400).json({ message: 'Missing parameter.' })

  try {
    const rawComments = await redis.lrange<RawComment>(url, 0, -1)
    const comments = rawComments.map(parseComment)

    return res.status(200).json(comments)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default fetchComment

const parseComment = ({ user: _user, ...others }: RawComment): Comment => {
  const { email, ...user } = _user

  return { ...others, user }
}
