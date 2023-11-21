/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App'
import Header from './components/main/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Header />
    </App>
  </React.StrictMode>,
)
