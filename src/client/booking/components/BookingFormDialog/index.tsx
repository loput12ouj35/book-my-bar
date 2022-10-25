import { CalendarOutlined } from '@ant-design/icons'
import { Form, Modal, Radio } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { FC } from 'react'

import Tags from './\bTags'
import { useBookingFormDialog } from './hooks'
import { BookingForm, BookingFormDialogProps } from './types'

const BookingFormDialog: FC<BookingFormDialogProps> = (props) => {
  const { open, date, form, submitting, closeDialog, handleOk } = useBookingFormDialog(props)
  const dateString = date.format('YYYY-MM-DD')

  return (
    <Modal
      title={
        <>
          <CalendarOutlined /> {dateString}에 ㄱ_ㄱ
        </>
      }
      open={open}
      onOk={handleOk}
      confirmLoading={submitting}
      onCancel={closeDialog}
      okText="예약신청하기"
      cancelText="닫기"
    >
      <Form
        form={form}
        onFinish={handleOk}
        initialValues={DEFAULT_FORM_VALUES}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
      >
        <Form.Item label="많이 마실건가요?" name={['options', 'drinkToDie']}>
          <Radio.Group>
            <Radio value="yes">그럼요</Radio>
            <Radio value="maybe">적당히요</Radio>
            <Radio value="no">조금만 먹을래요</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="그날 자고 갈래요!" name={['options', 'overnight']}>
          <Radio.Group>
            <Radio value="yes">그럼요</Radio>
            <Radio value="maybe">간 볼게요</Radio>
            <Radio value="no">아뇨</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="다른 사람이 조인해도 좋아요!" name={['options', 'allowJoin']}>
          <Radio.Group>
            <Radio value="yes">그럼요</Radio>
            <Radio value="maybe">간 볼게요</Radio>
            <Radio value="no">아뇨</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="더 필요한게 있어요."
          name={['options', 'extraRequest']}
          rules={[{ max: 200, message: '200자를 초과할 수 없습니다.' }]}
        >
          <TextArea rows={4} placeholder="요청사항이나 전달할 메모를 적어주세요." />
        </Form.Item>
      </Form>
      <Tags dateString={dateString} />
    </Modal>
  )
}

export default BookingFormDialog

const DEFAULT_FORM_VALUES: BookingForm = {
  options: {
    extraRequest: '',
    overnight: 'maybe',
    allowJoin: 'maybe',
    drinkToDie: 'maybe',
  },
}

// TODO: 선호 주종 옵션 추가. 선택가능한 칩으로
// TODO: 분위기/무드/컨셉 선택은 RadioImageButton
