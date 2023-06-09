import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
