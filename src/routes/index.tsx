import { Navigate, useRoutes } from 'react-router'
import Home from '../application/Home'
import Rank from '../application/Rank'
import Recommend from '../application/Recommend'
import Singers from '../application/Singers'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        { path: '/', element: <Navigate to={'/recommend'} /> },
        { path: '/recommend', element: <Recommend /> },
        { path: '/singers', element: <Singers /> },
        { path: '/rank', element: <Rank /> },
      ],
    },
  ])
  return element
}
