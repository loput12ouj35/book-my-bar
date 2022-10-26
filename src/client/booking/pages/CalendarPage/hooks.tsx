import { Space, Tag, TagProps } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { ReactNode, useState } from 'react'

import { UseCalendarPage, UseDateCellRender } from './types'
import { validateBookingDate } from './utils'

import { useBookingListQuery } from 'client/common/_query/bookings'
import { BookingHistory } from 'common/types/booking'

export const useCalendarPage: UseCalendarPage = () => {
  const [date, setDate] = useState(dayjs())
  const [open, setDialogOpen] = useState(false)

  const bookable = validateBookingDate(date)

  const openDialog = () => setDialogOpen(true)

  const closeDialog = () => setDialogOpen(false)

  return {
    date,
    bookable,
    handleSelect: setDate,
    handleClickButton: openDialog,
    bookingFormDialogProps: {
      date,
      open,
      closeDialog,
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
          const { status } = histories.at(-1) ?? {}

          if (!status) return null
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
