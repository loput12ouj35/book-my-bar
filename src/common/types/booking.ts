import { User, WithRawUser } from './user'

type Timestamp = number

export interface Booking {
  id: string
  histories: History[]
  /** 예약한 시작 타임스탬프 */
  from: Timestamp
  /** 예약한 끝 타임스탬프 */
  to: Timestamp
  options: Partial<BookingOptions>
  user: User
}

export type RawBooking = WithRawUser<Booking>

export interface History {
  /** 예약 상태 */
  status: 'confirmed' | 'rejected' | 'canceled' | 'pending'
  /** 상태 변경 시각 */
  updatedAt: Timestamp
}

type Decision = 'yes' | 'no' | 'maybe'

interface BookingOptions {
  /** 추가 요청 사항 */
  extraRequest: string
  /** 자고 갈건가요? */
  overnight: Decision
  /** 합석해도 돼요? */
  allowJoin: Decision
  /** 많이 마실건가요? */
  drinkToDie: Decision
}

export interface GetBookingRequestQuery {
  year: number
  month: number
}

export type CreateBookingRequestBody = Pick<Booking, 'from' | 'to' | 'options'>
