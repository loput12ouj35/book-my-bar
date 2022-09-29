import { nanoid } from 'nanoid'
import { NextApiHandler } from 'next'

import getUser from './getUser'
import redis from './redis'

const createComments: NextApiHandler = async (req, res) => {
  const { url, text } = req.body
  const { authorization } = req.headers

  if (!url || !text || !authorization) {
    return res.status(400).json({ message: 'Missing parameter.' })
  }

  try {
    // verify user token
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Need authorization.' })

    const { name, picture, sub, email } = user

    const comment = {
      id: nanoid(),
      created_at: Date.now(),
      url,
      text,
      user: { name, picture, sub, email },
    }

    // write data
    await redis.lpush(url, JSON.stringify(comment))

    return res.status(200).json(comment)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default createComments
