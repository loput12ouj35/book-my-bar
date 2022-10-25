export type GnbProps = Pick<CommonPageProps, 'hasBigLogo'>

interface UseGnbReturns {
  selectedKeys: string[]
}

export type UseGnb = () => UseGnbReturns
