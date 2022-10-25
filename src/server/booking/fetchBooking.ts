import { NextApiHandler } from 'next'

import redis from '../redis'

import { Booking, GetBookingRequestQuery, RawBooking } from 'common/types/booking'
import { ServerError } from 'common/types/serverError'

const fetchBooking: NextApiHandler<Booking[] | ServerError> = async (req, res) => {
  const { year, month } = req.query as unknown as GetBookingRequestQuery

  if (!year || !month) return res.status(400).json({ message: 'Missing parameter.' })

  try {
    const rawBooking = await redis.lrange(`${year}-${month}`, 0, -1)
    const booking = rawBooking.map(parseBooking)

    return res.status(200).json(booking)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default fetchBooking

// TODO: 관리자와 작성자 제외하고는 자세한 정보 안 보이도록
const parseBooking = (rawBooking: string): Booking => {
  const { user: _user, ...others }: RawBooking = JSON.parse(rawBooking)
  const { email, ...user } = _user

  return { ...others, user }
}
