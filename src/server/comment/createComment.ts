import { nanoid } from 'nanoid'
import { NextApiHandler } from 'next'

import getUser from '../getUser'
import { redis } from '../redis'

import { CreateCommentRequestBody, RawComment } from 'common/types/comment'
import { ServerError } from 'common/types/serverError'

const createComments: NextApiHandler<RawComment | ServerError> = async (req, res) => {
  const { url, text }: CreateCommentRequestBody = req.body
  const { authorization } = req.headers

  if (!url || !text || !authorization) return res.status(400).json({ message: 'Missing parameter.' })

  if (text.length > 500) return res.status(400).json({ message: 'Too long text.' })

  try {
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Need authorization.' })

    const { name, picture, sub, email } = user

    const comment: RawComment = {
      id: nanoid(),
      createdAt: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    }

    await redis.lpush(url, JSON.stringify(comment))

    return res.status(200).json(comment)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default createComments
