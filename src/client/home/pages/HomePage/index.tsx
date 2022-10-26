import { Divider } from 'antd'
import { FC } from 'react'

import CupCard from '../../components/CupCard'
import EventCard from '../../components/EventCard'
import MapCard from '../../components/MapCard'
import PhotoCard from '../../components/PhotoCard'
import styles from './.module.scss'

import { CommonSection } from 'client/common/components'

const HomePage: FC = () => {
  return (
    <CommonSection className={styles.root}>
      {/* 캐러셀 들어갈 자리 */}
      <PhotoCard
        img="/tuna.jpg"
        title='예술이 가득한... "홈바"'
        descriptions={[
          '다양한 주종 구비... 칵테일 가.능,',
          '고급 술도 구비. 근데 그냥 준다고는 안 했다구.',
          '근처 이마트에서 참치 타임세일로 사는 것을 추천.',
        ]}
      />
      <PhotoCard
        reversed
        img="/kavalan.jpg"
        title="예술이라구"
        descriptions={[
          '잔도 다 구비가 되어있다구',
          '밑에 더 예쁜 잔들 사진 넣어봄.',
          '예약은 너굴맨이 처리할테니 안심하라구!',
        ]}
      />
      <PhotoCard
        img="/sonyeo-talk.jpg"
        title="키핑도 해준다구!"
        descriptions={['근데 다음에 오기 전에 다른 사람들이 먹을 수 있음.']}
      />
      <PhotoCard
        reversed
        img="/tuna2.jpg"
        title="컨텐츠...?"
        descriptions={['50인치 티비로 유투브 우동소바오사카나라 보면 됨.', '아니면 영상통화?']}
      />
      <Divider />
      <CupCard />
      <Divider />
      <EventCard />
      <Divider />
      <MapCard />
    </CommonSection>
  )
}

export default HomePage
