import { Space } from 'antd'
import { FC } from 'react'

import styles from './.module.scss'
import { CommonSectionProps } from './types'

const CommonSection: FC<CommonSectionProps> = ({ border = 'none', ...props }) => (
  <div className={styles[border]}>
    <Space size="large" direction="vertical" {...props} />
  </div>
)

export default CommonSection
