import { MenuOutlined } from '@ant-design/icons'
import { Button, ButtonProps, Dropdown, Menu } from 'antd'
import { FC } from 'react'

import { LINK_COMPONENTS } from '../GnbNav/constants'
import SignInButton from '../SignInButton'

const GnbMenuButton: FC<ButtonProps> = (props) => {
  return (
    <Dropdown overlay={<Menu items={MENUS} />} trigger={['click']}>
      <Button {...props} type="text" shape="round" icon={<MenuOutlined />} onClick={undefined}>
        메뉴
      </Button>
    </Dropdown>
  )
}

export default GnbMenuButton

const MENUS = [
  ...LINK_COMPONENTS,
  {
    type: 'divider',
    key: '998',
  },
  {
    label: <SignInButton />,
    key: '999',
  },
]
