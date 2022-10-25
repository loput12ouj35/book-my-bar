import { CalendarOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Typography } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'
import { useCalendarPage } from './hooks'
import { createButtonString } from './utils'

import BookingFormDialog from 'client/booking/components/BookingFormDialog'
import { Calendar, CommonSection } from 'client/common/components'

const CalendarPage: FC = () => {
  const { date, bookable, handleSelect, handleClickButton, bookingFormDialogProps } = useCalendarPage()
  const { isAuthenticated } = useAuth0()
  const disabled = !isAuthenticated || bookable !== 'vacant'

  return (
    <CommonSection>
      <Typography.Title level={2}>언제 오실래요?</Typography.Title>
      <Calendar value={date} onSelect={handleSelect} />
      <div className={styles.buttonWrapper}>
        <Button icon={<CalendarOutlined />} size="large" type="primary" onClick={handleClickButton} disabled={disabled}>
          {isAuthenticated ? createButtonString(bookable, date) : '예약하려면 로그인하세요.'}
        </Button>
      </div>
      <BookingFormDialog {...bookingFormDialogProps} />
    </CommonSection>
  )
}

export default CalendarPage
