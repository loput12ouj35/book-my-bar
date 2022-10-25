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

  const { mutate } = useCommentListQuery({ url })

  useEffect(() => {
    setUrl(asPath)
  }, [asPath])

  const onSubmit = async ({ text }: CommentForm) => {
    const token = await getAccessTokenSilently()

    try {
      setSubmitting(true)
      const body = { url, text }

      await createComment(body, token)
      await mutate()
    } catch (err) {
      console.log(err)
    } finally {
      setSubmitting(false)
    }
  }

  return { submitting, onSubmit }
}
