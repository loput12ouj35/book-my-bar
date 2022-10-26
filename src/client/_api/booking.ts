import { Booking, CreateBookingRequestBody, GetBookingsRequestQuery } from 'common/types/booking'
import fetcher from 'common/utils/fetcher'
import { noop } from 'common/utils/functions'

const PATH = '/api/booking'

export const getBookings = (query: GetBookingsRequestQuery): Promise<Booking[]> => {
  const _query = Object.fromEntries(Object.entries(query).map(([key, value]) => [key, String(value)]))
  const queryString = new URLSearchParams(_query).toString()
  return fetcher.get(`${PATH}?${queryString}`)
}

export const createBooking = (body: CreateBookingRequestBody, token: string): Promise<void> =>
  fetcher.post(PATH, { body, headers: { Authorization: token } }, noop)
