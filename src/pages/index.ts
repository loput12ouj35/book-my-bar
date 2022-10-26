import { GetStaticProps } from 'next'

export { default } from 'client/home/pages/HomePage'

export const getStaticProps: GetStaticProps<CommonPageProps> = () => ({
  props: { title: '홈' },
})
