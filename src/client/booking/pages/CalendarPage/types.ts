import { Dayjs } from 'dayjs'
import { Dispatch, SetStateAction } from 'react'

interface UseCalendarPageReturns {
  date: Dayjs
  handleSelect: Dispatch<SetStateAction<Dayjs>>
}

export type UseCalendarPage = () => UseCalendarPageReturns
