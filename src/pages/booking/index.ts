import { GetStaticProps } from 'next'

export { default } from 'booking/pages/CalendarPage'

export const getStaticProps: GetStaticProps<CommonPageProps> = () => {
  return {
    props: {
      title: '예약하기',
    },
  }
}
