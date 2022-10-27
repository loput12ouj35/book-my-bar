import { UseGnb } from './types'

export const useGnb: UseGnb = () => {
  const back = (): void => {
    if (window.history.length > 0) return window.history.back()
    location.pathname = '/'
  }

  return {
    back,
  }
}
