import { FC } from 'react'

import { ContainerProps } from './types'

const Container: FC<ContainerProps> = (props) => {
  const { children, className = '' } = props
  const _className = `container max-w-2xl m-auto px-4 ${className}`

  return <div className={_className}>{children}</div>
}

export default Container
