import styled from '@emotion/styled'
import Scroll from '../../baseUI/Scroll'
import RecommendList from '../../components/RecommendList'
import Slider from '../../components/Slider'
import { forceCheck } from 'react-lazyload'

const Recommend = () => {
  const bannerList = [1, 2, 3, 4].map(item => {
    return {
      imageUrl:
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
    }
  })
  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
    item => {
      return {
        id: 1,
        picUrl:
          'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
        playCount: 17171122,
        name: '朴树、许巍、李健、郑钧、老狼、赵雷',
      }
    }
  )
  return (
    <Content>
      <Scroll onScroll={forceCheck} className='list'>
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
    </Content>
  )
}

const Content = styled.div`
  position: fixed;
  width: 100%;
  top: 90;
  bottom: 0;
`
export default Recommend
