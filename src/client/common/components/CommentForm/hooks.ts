import { useAuth0 } from '@auth0/auth0-react'
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

  const query = new URLSearchParams({ url })
  const { mutate } = useCommentListQuery(query.toString())

  useEffect(() => {
    setUrl(asPath)
  }, [asPath])

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
