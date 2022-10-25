import { NextApiHandler } from 'next'

import createBooking from 'server/booking/createBooking'
import fetchBooking from 'server/booking/fetchBooking'

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return fetchBooking(req, res)
    case 'POST':
      return createBooking(req, res)
    // case 'PUT':
    // TODO
    default:
      return res.status(400).json({ message: 'Invalid method.' })
  }
}

export default handler
