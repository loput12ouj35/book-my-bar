import { CalendarOutlined, FileTextOutlined, HomeOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const GNB_NAV_LINKS = [
  ['/', '홈', <HomeOutlined key="icon" />],
  ['/booking', '예약하기', <CalendarOutlined key="icon" />],
  ['/posts', '글보기', <FileTextOutlined key="icon" />],
] as const

export const LINK_COMPONENTS = GNB_NAV_LINKS.map(([href, label, icon]) => ({
  icon,
  label: (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  ),
  key: href,
}))
