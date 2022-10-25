import { useAuth0 } from '@auth0/auth0-react'
import { Avatar, Button, Comment, Form } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { FC } from 'react'

import { useCommentForm } from './hooks'

const CommentForm: FC = () => {
  const { submitting, onSubmit } = useCommentForm()
  const { isAuthenticated, user } = useAuth0()

  return (
    <Comment
      avatar={<Avatar src={user?.picture} />}
      content={
        <Form
          onFinish={onSubmit}
          initialValues={{ text: '' }}
          autoComplete="off"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          disabled={!isAuthenticated}
        >
          <Form.Item
            name="text"
            rules={[
              { required: true, message: '내용을 입력하세요.' },
              { max: 500, message: '500자를 초과할 수 없습니다.' },
            ]}
          >
            <TextArea
              rows={2}
              placeholder={isAuthenticated ? '글 남기기' : '글을 남기려면 로그인 ㄱ_ㄱ'}
              disabled={!isAuthenticated}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              글 남기기
            </Button>
          </Form.Item>
        </Form>
      }
    />
  )
}

export default CommentForm
