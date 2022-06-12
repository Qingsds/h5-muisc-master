import ReactDOM from 'react-dom/client'
import App from './App'
import '@icon-park/react/styles/index.css'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
