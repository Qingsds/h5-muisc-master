import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import styled from '@emotion/styled'
import style from '../../assets/global-style'

const Slider = ({ bannerList }: { bannerList: any[] }) => {
  return (
    <SliderContainer>
      <div className='before'></div>
      <Swiper
        className='slider-container'
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'bullets',
        }}
      >
        {bannerList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={item.imageUrl}
                width={'100%'}
                height={'100%'}
                alt='推荐'
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before {
    position: absolute;
    height: 60%;
    width: 100%;
    background: ${style['theme-color']};
  }
  .slider-container {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 7px;
  }
  .swiper-pagination-bullet-active {
    background: ${style['theme-color']};
  }
`
export default Slider
