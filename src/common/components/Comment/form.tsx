import { useAuth0 } from '@auth0/auth0-react'
import { FC } from 'react'

import { CommentFormProps } from './types'

const CommentForm: FC<CommentFormProps> = (props) => {
  const { text, setText, onSubmit } = props
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500"
        rows={2}
        placeholder={isAuthenticated ? '글 남기기' : '로그인 ㄱ_ㄱ'}
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700">
              쓰기
            </button>
            <button className="text-gray-500" onClick={() => logout()}>
              로그아웃
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700"
            onClick={() => loginWithPopup()}
          >
            로그인
          </button>
        )}
      </div>
    </form>
  )
}

export default CommentForm
