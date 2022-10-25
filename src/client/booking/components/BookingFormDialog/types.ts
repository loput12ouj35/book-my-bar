import { FormInstance } from 'antd'
import { Dayjs } from 'dayjs'

import { CreateBookingRequestBody } from 'common/types/booking'

export interface BookingFormDialogProps {
  date: Dayjs
  open: boolean
  closeDialog: () => void
}

interface UseBookingFormDialogReturns extends BookingFormDialogProps {
  form: FormInstance<BookingForm>
  submitting: boolean
  handleOk: () => void
}

export type UseBookingFormDialog = (props: BookingFormDialogProps) => UseBookingFormDialogReturns

export type BookingForm = Pick<CreateBookingRequestBody, 'options'>
