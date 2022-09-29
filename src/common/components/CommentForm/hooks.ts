import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { CommentForm, UseCommentForm } from '../CommentForm/types'

import { useCommentListQuery } from 'common/_query/comments'

export const useCommentForm: UseCommentForm = () => {
  const { getAccessTokenSilently } = useAuth0()
  const { pathname } = useRouter()
  const [url, setUrl] = useState(pathname)
  const [submitting, setSubmitting] = useState(false)

  const query = new URLSearchParams({ url })
  const { mutate } = useCommentListQuery(query)

  useEffect(() => {
    setUrl(pathname)
  }, [pathname])

  const onSubmit = async (value: CommentForm) => {
    const token = await getAccessTokenSilently()

    try {
      setSubmitting(true)
      await createComment(url, value.text, token)
      await mutate()
    } catch (err) {
      console.log(err)
    } finally {
      setSubmitting(false)
    }
  }

  return { submitting, onSubmit }
}

const createComment = (url: string, text: string, token: string) =>
  fetch('/api/comment', {
    method: 'POST',
    body: JSON.stringify({ url, text }),
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })
