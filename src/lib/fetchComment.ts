import { NextApiHandler } from 'next'

import redis from './redis'

import { Comment } from 'common/types/comment'

const fetchComment: NextApiHandler = async (req, res) => {
  const { url } = req.query

  if (!url || Array.isArray(url)) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  try {
    // get data
    const rawComments: string[] = await redis.lrange(url, 0, -1)

    // string data to object
    const comments: Comment[] = rawComments.map((c) => {
      const comment: Comment = JSON.parse(c)
      delete comment.user.email
      return comment
    })

    return res.status(200).json(comments)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default fetchComment
