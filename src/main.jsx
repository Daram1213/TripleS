/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import HostInfo from './pages/host_info/HostInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HostInfo />
  </React.StrictMode>,
)
