import moment from 'moment'
import { useState } from 'react'

// TODO: 타입 추가
export const useCalendarPage = () => {
  const [date, setDate] = useState(moment())
  console.log(date)

  return {
    date,
    handleSelect: setDate,
  }
}
