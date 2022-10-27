import { LoginOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, ButtonProps } from 'antd'
import { FC } from 'react'

const SignInButton: FC<ButtonProps> = (props) => {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return isAuthenticated ? (
    <Button {...props} type="text" shape="round" icon={<LoginOutlined />} onClick={() => logout()}>
      로그아웃
    </Button>
  ) : (
    <Button {...props} type="text" shape="round" icon={<LoginOutlined />} onClick={() => loginWithPopup()}>
      로그인
    </Button>
  )
}

export default SignInButton
