import { LoginOutlined } from '@ant-design/icons'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'

const SignInButton: FC = () => {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0()

  return isAuthenticated ? (
    <Button className={styles.root} type="text" shape="round" icon={<LoginOutlined />} onClick={() => logout()}>
      로그아웃
    </Button>
  ) : (
    <Button className={styles.root} type="text" shape="round" icon={<LoginOutlined />} onClick={() => loginWithPopup()}>
      로그인
    </Button>
  )
}

export default SignInButton
