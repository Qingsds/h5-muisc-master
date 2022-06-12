import React, {
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import BetterScroll from 'better-scroll'
import { noop, debounce } from 'lodash'
import styled from '@emotion/styled'
import LoadingTop from '../Loading/loding-top'
import LoadingBottom from '../Loading/loading-bottom'

export interface ScrollProps {
  direction?: 'vertical' | 'horizontal'
  click?: true
  refresh?: boolean
  onScroll: Function
  pullUp?: () => void
  pullDown?: () => void
  pullUpLoading?: boolean
  pullDownLoading?: boolean
  bounceTop?: boolean
  bounceBottom?: boolean
  className: string
  children:ReactNode
}

interface PosData {
  x: number
  y: number
}

const Scroll = React.forwardRef(
  (
    props:ScrollProps,
    ref
  ) => {
    const [bScroll, setBScroll] = useState<BetterScroll | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement | null>(null)
    const {
      direction = 'vertical',
      click = true,
      refresh = true,
      pullUpLoading = false,
      pullDownLoading = false,
      bounceTop = true,
      bounceBottom = true,
      children
    } = props

    const { pullUp = noop, pullDown = noop, onScroll } = props

    const pullUpDebounce = useMemo(() => {
      return debounce(pullUp, 500)
    }, [pullUp])

    const pullDownDebounce = useMemo(() => {
      return debounce(pullDown, 500)
    }, [pullDown])

    //   初始化 bScroll
    useEffect(() => {
      const scroll = new BetterScroll(scrollContainerRef.current!, {
        scrollX: direction === 'horizontal',
        scrollY: direction === 'vertical',
        probeType: 3,
        click: click,
        //   是否支持向上下吸顶
        bounce: {
          top: bounceTop,
          bottom: bounceBottom,
        },
      })
      setBScroll(scroll)
      return () => {
        setBScroll(null)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // 监听 scroll 事件
    useEffect(() => {
      if (!bScroll || !onScroll) return
      bScroll.on('scroll', onScroll)
      return () => {
        bScroll.off('scroll', onScroll)
      }
    }, [bScroll, onScroll])
    // 上拉
    useEffect(() => {
      if (!bScroll || !pullUp) return
      const handlePullUp = () => {
        // 判断是否触底
        if (bScroll.y <= bScroll.maxScrollY + 100) {
          pullUpDebounce()
        }
      }
      bScroll.on('scrollEnd', handlePullUp)
      return () => {
        bScroll.off('scrollEnd', handlePullUp)
      }
    }, [bScroll, pullUpDebounce, pullUp])

    // 下拉
    useEffect(() => {
      if (!bScroll || !pullDown) return
      const handlePullDown = (pos: PosData) => {
        //判断用户的下拉动作
        if (pos.y > 50) {
          pullDownDebounce()
        }
      }
      bScroll.on('touchEnd', handlePullDown)
      return () => {
        bScroll.off('touchEnd', handlePullDown)
      }
    }, [pullDown, pullDownDebounce, bScroll])

    useEffect(() => {
      if (refresh && bScroll) {
        bScroll.refresh()
      }
    })

    useImperativeHandle(ref, () => ({
      refresh() {
        if (bScroll) {
          bScroll.refresh()
          bScroll.scrollTo(0, 0)
        }
      },
      getBScroll() {
        if (bScroll) {
          return bScroll
        }
      },
    }))

    const PullUpdisplayStyle = pullUpLoading
      ? { display: '' }
      : { display: 'none' }
    const PullDowndisplayStyle = pullDownLoading
      ? { display: '' }
      : { display: 'none' }

    return (
      <ScrollContainer ref={scrollContainerRef}>
        {children}
        {/* 滑到底部加载动画 */}
        <PullUpLoading style={PullUpdisplayStyle}>
          <LoadingBottom></LoadingBottom>
        </PullUpLoading>
        {/* 顶部下拉刷新动画 */}
        <PullDownLoading style={PullDowndisplayStyle}>
          <LoadingTop></LoadingTop>
        </PullDownLoading>
      </ScrollContainer>
    )
  }
)

const ScrollContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`
const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`
export const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`

export default Scroll
