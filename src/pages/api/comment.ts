import { NextApiHandler } from 'next'

import createComments from 'lib/comment/createComment'
import deleteComments from 'lib/comment/deleteComment'
import fetchComment from 'lib/comment/fetchComment'

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return fetchComment(req, res)
    case 'POST':
      return createComments(req, res)
    case 'DELETE':
      return deleteComments(req, res)
    default:
      return res.status(400).json({ message: 'Invalid method.' })
  }
}

export default handler
