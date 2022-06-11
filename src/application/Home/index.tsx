import styled from '@emotion/styled'
import { HamburgerButton, Search } from '@icon-park/react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import style from '../../assets/global-style'

const Home = () => {
  return (
    <div>
      <Header>
        <Top>
          <HamburgerButton theme='outline' size={'25px'} />
          <span>网易云音乐</span>
          <Search theme='outline' size={'25px'} />
        </Top>
        <Tab>
          <NavLink to={'/recommend'}>
            <span>推荐</span>
          </NavLink>
          <NavLink to={'/singers'}>
            <span>歌手</span>
          </NavLink>
          <NavLink to={'/rank'}>
            <span>排行榜</span>
          </NavLink>
        </Tab>
      </Header>
      <Outlet />
    </div>
  )
}

const Header = styled.div`
  background: ${style['theme-color']};
`

const Top = styled.div`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  & > span {
    font-size: 20px;
    color: #f1f1f1;
  }
`

const Tab = styled.div`
  display: flex;
  height: 44px;
  justify-content: space-around;
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    line-height: 44px;
    text-align: center;
    &.selected {
      > span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`

export default Home
