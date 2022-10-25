import { NextApiHandler } from 'next'

import getUser from '../getUser'
import redis from '../redis'

import { DeleteCommentRequestBody, RawComment } from 'common/types/comment'
import { ServerError } from 'common/types/serverError'

const deleteComments: NextApiHandler<null | ServerError> = async (req, res) => {
  const { url, comment }: DeleteCommentRequestBody = req.body
  const { authorization } = req.headers

  if (!url || !comment || !authorization) return res.status(400).json({ message: 'Missing parameter.' })

  try {
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Invalid token.' })

    const isAdmin = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL === user.email
    const isAuthor = user.sub === comment.user.sub

    if (!isAdmin && !isAuthor) return res.status(400).json({ message: 'Need authorization.' })

    const rawComment: RawComment = { ...comment, user: { ...comment.user, email: user.email } }

    await redis.lrem(url, 0, JSON.stringify(rawComment))

    return res.status(200).json(null)
  } catch (err) {
    return res.status(400)
  }
}

export default deleteComments
