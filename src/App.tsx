import { Global } from '@emotion/react'
import MyRoute from './routes'
import { GlobalStyles } from './style'
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <MyRoute />
    </Router>
  )
}

export default App
