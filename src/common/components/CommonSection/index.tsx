import { Space } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'
import { CommonSectionProps } from './types'

const CommonSection: FC<CommonSectionProps> = ({ border = 'none', className = '', ...props }) => (
  <Space className={`${className} ${styles[border]}`} size="large" direction="vertical" {...props} />
)

export default CommonSection
