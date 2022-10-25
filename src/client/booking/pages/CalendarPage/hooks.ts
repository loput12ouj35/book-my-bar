import dayjs from 'dayjs'
import { useReducer, useState } from 'react'

import { UseCalendarPage } from './types'
import { validateBookingDate } from './utils'

export const useCalendarPage: UseCalendarPage = () => {
  const [date, setDate] = useState(dayjs())
  const [open, toggleDialogOpen] = useReducer((v) => !v, false)

  const bookable = validateBookingDate(date)

  return {
    date,
    bookable,
    handleSelect: setDate,
    handleClickButton: toggleDialogOpen,
    bookingFormDialogProps: {
      date,
      open,
      closeDialog: toggleDialogOpen,
    },
  }
}
