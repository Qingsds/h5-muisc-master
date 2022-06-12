import styled from '@emotion/styled'
import { Play } from '@icon-park/react'
import { getCount } from '../../api/utils'
import style from '../../assets/global-style'

const RecommendList = ({ recommendList }: { recommendList: any[] }) => {
  return (
    <ListWrapper>
      <h2 className='title'>推荐列表</h2>
      <List>
        {recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className='img_wrapper'>
                <div className='decorate'></div>
                <img
                  src={item.picUrl + '? param=300*300'}
                  width={'100%'}
                  height={'100%'}
                  alt='music'
                />
                <div className='paly_count'>
                  <Play />
                  <span className='count'>{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className='desc'>{item.name}</div>
            </ListItem>
          )
        })}
      </List>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`
const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
const ListItem = styled.div`
  position: relative;
  width: 32%;
  .img_wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;

    .paly_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${style['font-size-s']};
      line-height: 15px;
      color: ${style['font-color-light']};
      .play {
        vertical-align: top;
      }
    }
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0, 0%, 43%, 0.4), hsla (0, 0%, 100%, 0));
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }

  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 50px;
    text-align: left;
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    color: ${style['font-color-desc']};
  }
`

export default RecommendList
