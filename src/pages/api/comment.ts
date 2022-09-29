import { NextApiHandler } from 'next'

import createComments from '../../lib/createComment'
import deleteComments from '../../lib/deleteComment'
import fetchComment from '../../lib/fetchComment'

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
