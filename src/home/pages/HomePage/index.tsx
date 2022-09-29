import Image from 'next/image'
import { FC } from 'react'

import Container from 'common/components/Container'

const HomePage: FC = () => {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">술 ㄱ_ㄱ</h1>
          <p>그런건 너굴맨이 처리했다구~</p>
        </div>
      </Container>
      <Container className="mt-20">
        <Image src="/NeoGulMan.jpeg" alt="너굴맨" width={600} height={300} />
      </Container>
    </>
  )
}

export default HomePage
