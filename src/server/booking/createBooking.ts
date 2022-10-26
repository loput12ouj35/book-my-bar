import dayjs, { Dayjs } from 'dayjs'
import { nanoid } from 'nanoid'
import { NextApiHandler } from 'next'

import getUser from '../getUser'
import redis from '../redis'

import { Booking, CreateBookingRequestBody, BookingHistory, RawBooking } from 'common/types/booking'
import { ServerError } from 'common/types/serverError'

const createBooking: NextApiHandler<Booking | ServerError> = async (req, res) => {
  const { from, to, options }: CreateBookingRequestBody = req.body
  const { authorization } = req.headers

  if (!from || !to || !authorization) return res.status(400).json({ message: 'Missing parameter.' })

  const _from = dayjs(from)
  const _to = dayjs(to)

  if (!validateBookingDate(_from, _to)) return res.status(400).json({ message: 'Invalid date.' })

  try {
    const user = await getUser(authorization)
    if (!user) return res.status(400).json({ message: 'Need authorization.' })

    const { name, picture, sub, email } = user

    const booking: RawBooking = {
      id: nanoid(),
      histories: [createFirstHistory()],
      from,
      to,
      options,
      user: { name, picture, sub, email },
    }

    const year = _from.get('year')
    const month = _from.get('month') + 1

    await redis.lpush(`/booking/${year}-${month}`, JSON.stringify(booking))

    return res.status(200).json(booking)
  } catch (_) {
    return res.status(400).json({ message: 'Unexpected error occurred.' })
  }
}

export default createBooking

// TODO: 날짜 범위는 공통 유틸로 뺄만함
const validateBookingDate = (from: Dayjs, to: Dayjs): boolean => {
  const now = dayjs()
  const past = from.diff(now, 'day') < 0
  const validBoundary = from.isBefore(to)
  const over30days = from.diff(now, 'day') > 30
  // TODO: 현재는 하루만 예약. 나중에 정책 변경. 그러면 월말월초에 걸치는 예약기간 처리를 해야해서 redis에 넣는 키를 바꾸거나, 읽어올 때, 이전 달 것도 읽어야함.
  const shortRange = to.diff(from, 'day') < 2

  return !past && validBoundary && !over30days && shortRange
}

const createFirstHistory = (): BookingHistory => ({ status: 'pending', updatedAt: Date.now() })
