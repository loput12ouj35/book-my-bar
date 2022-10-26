import { Space, Tag, TagProps } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { ReactNode, useReducer, useState } from 'react'

import { UseCalendarPage, UseDateCellRender } from './types'
import { validateBookingDate } from './utils'

import { useBookingListQuery } from 'client/common/_query/bookings'
import { BookingHistory } from 'common/types/booking'

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

export const useDateCellRender: UseDateCellRender = (date) => {
  const { data: bookings = [] } = useBookingListQuery(date)

  const dateCellRender = (currentDate: Dayjs): ReactNode => {
    const currentDay = currentDate.startOf('day')
    const filtered = bookings.filter((booking) => dayjs(booking.from).isSame(currentDay, 'day'))

    return filtered.length > 0 ? (
      <Space direction="vertical">
        {filtered.map((booking, i) => {
          const { histories } = booking
          const { status } = histories.at(-1)
          const [message, color] = TAG_MAP[status]

          return (
            <Tag key={i} color={color}>
              {message}
            </Tag>
          )
        })}
      </Space>
    ) : null
  }

  return dateCellRender
}

// TODO: 아이콘 추가
const TAG_MAP: Record<BookingHistory['status'], [string, TagProps['color']]> = {
  pending: ['승인 대기중', 'warn'],
  canceled: ['취소됨', 'default'],
  rejected: ['거절됨', 'danger'],
  confirmed: ['확정됨', 'success'],
}
