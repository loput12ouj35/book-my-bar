import { CreateBookingRequestBody } from 'common/types/booking'
import fetcher from 'common/utils/fetcher'
import { noop } from 'common/utils/functions'

const PATH = '/api/booking'

export const createBooking = (body: CreateBookingRequestBody, token: string): Promise<void> =>
  fetcher.post(PATH, { body, headers: { Authorization: token } }, noop)
