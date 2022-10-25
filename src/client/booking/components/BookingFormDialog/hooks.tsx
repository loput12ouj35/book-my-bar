import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { message, Modal } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { useEffect, useState } from 'react'

import { BookingForm, UseBookingFormDialog } from './types'

import { createBooking } from 'client/_api/booking'

export const useBookingFormDialog: UseBookingFormDialog = (props) => {
  const { date, closeDialog } = props
  const [submitting, setSubmitting] = useState(false)
  const [form] = useForm<BookingForm>()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  const handleOk = (): void => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '이대로 갑니다?',
      okText: '가즈아',
      cancelText: 'ㅈㅅ ㅎㅎ',
      centered: true,
      onOk: submit,
    })
  }

  const submit = async () => {
    const options = form.getFieldsValue()
    const token = await getAccessTokenSilently()

    setSubmitting(true)
    // TODO: 나중에는 하루 사이에도 시간 범위도 지정할 수 있기를..
    const from = date.startOf('day').valueOf()
    const to = date.endOf('day').valueOf()
    const body = { from, to, ...options }

    try {
      await createBooking(body, token)
      // await mutate() // TODO: 캘린더 내용 mutate 필요
      message.success('예약신청이 성공했어요.')
      closeDialog()
    } catch (_) {
      message.error('예약신청이 실패했어요.')
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) closeDialog()
  }, [isAuthenticated, closeDialog])

  return {
    ...props,
    form,
    submitting,
    handleOk,
  }
}
