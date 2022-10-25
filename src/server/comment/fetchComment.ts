import { NextApiHandler } from 'next'

import redis from '../redis'

import { Comment, CommentInDB } from 'common/types/comment'
import { ServerError } from 'common/types/serverError'

const fetchComment: NextApiHandler<Comment[] | ServerError> = async (req, res) => {
  const { url } = req.query

  if (!url || Array.isArray(url)) return res.status(400).json({ message: 'Missing parameter.' })

  try {
    const rawComments = await redis.lrange(url, 0, -1)
    const comments = rawComments.map(parseComment)

    return res.status(200).json(comments)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default fetchComment

const parseComment = (rawComment: string): Comment => {
  const { user: _user, ...others }: CommentInDB = JSON.parse(rawComment)
  const { email, ...user } = _user

  return { ...others, user }
}