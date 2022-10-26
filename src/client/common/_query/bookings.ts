import dayjs, { Dayjs } from 'dayjs'
import useSWR, { SWRResponse } from 'swr'

import { getBookings } from 'client/_api/booking'
import { Booking, GetBookingsRequestQuery } from 'common/types/booking'

export function useBookingListQuery(date: Dayjs): SWRResponse<Booking[]>
export function useBookingListQuery(query: GetBookingsRequestQuery): SWRResponse<Booking[]>
export function useBookingListQuery(input: Dayjs | GetBookingsRequestQuery): SWRResponse<Booking[]> {
  const query = dayjs.isDayjs(input) ? { year: input.get('year'), month: input.get('month') + 1 } : input

  return useSWR(['bookings', query], () => getBookings(query))
}
