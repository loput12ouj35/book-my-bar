import { useAuth0 } from '@auth0/auth0-react'
import { message } from 'antd'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { CommentForm, UseCommentForm } from '../CommentForm/types'

import { createComment } from 'client/_api/comment'
import { useCommentListQuery } from 'client/common/_query/comments'

export const useCommentForm: UseCommentForm = () => {
  const { getAccessTokenSilently } = useAuth0()
  const { asPath } = useRouter()
  const [url, setUrl] = useState(asPath)
  const [submitting, setSubmitting] = useState(false)

  const { mutate } = useCommentListQuery({ url })

  useEffect(() => {
    setUrl(asPath)
  }, [asPath])

  const onSubmit = async ({ text }: CommentForm) => {
    const token = await getAccessTokenSilently()

    setSubmitting(true)
    const body = { url, text }

    try {
      await createComment(body, token)
      await mutate()
      message.success('댓글생성이 성공했어요.')
    } catch (error) {
      message.error('댓글생성이 실패했어요.')
    } finally {
      setSubmitting(false)
    }
  }

  return { submitting, onSubmit }
}
