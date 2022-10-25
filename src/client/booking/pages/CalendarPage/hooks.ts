import dayjs from 'dayjs'
import { useState } from 'react'

import { UseCalendarPage } from './types'

export const useCalendarPage: UseCalendarPage = () => {
  const [date, setDate] = useState(dayjs())

  return {
    date,
    handleSelect: setDate,
  }
}
