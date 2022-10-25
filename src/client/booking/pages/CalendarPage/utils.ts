import dayjs, { Dayjs } from 'dayjs'

import { Bookable } from './types'

export const createButtonString = (bookable: Bookable, date: Dayjs) => {
  switch (bookable) {
    case 'vacant':
      return `${date.format('YYYY-MM-DD')} 에 갈게요.`
    case 'booked':
      return '이미 예약이 있어요!'
    case 'past':
      return '지났어요!'
    case 'over30days':
      return `${dayjs().add(31, 'day').format('YYYY-MM-DD')} 뒤로는 안 돼요.`
  }
}

// TODO: 날짜 범위는 공통 유틸로 뺄만함
export const validateBookingDate = (date: Dayjs): Bookable => {
  const diff = date.diff(dayjs(), 'day')

  if (diff < 0) return 'past'
  if (diff > 30) return 'over30days'

  // TODO: 예약 겹치는지 비교
  return 'vacant'
}
