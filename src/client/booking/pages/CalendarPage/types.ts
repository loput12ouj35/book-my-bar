import { Dayjs } from 'dayjs'
import { Dispatch, SetStateAction } from 'react'

import { BookingFormDialogProps } from 'client/booking/components/BookingFormDialog/types'

export type Bookable = 'vacant' | 'past' | 'over30days' | 'booked'

interface UseCalendarPageReturns {
  date: Dayjs
  bookable: Bookable
  handleSelect: Dispatch<SetStateAction<Dayjs>>
  handleClickButton: () => void
  bookingFormDialogProps: BookingFormDialogProps
}

export type UseCalendarPage = () => UseCalendarPageReturns
