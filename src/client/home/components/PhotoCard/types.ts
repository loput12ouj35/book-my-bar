import { ReactNode } from 'react'

export interface PhotoCardProps {
  reversed?: boolean
  img: string
  title: ReactNode
  descriptions: string[]
  children?: ReactNode
}
