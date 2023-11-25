/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
=======
import Header from './pages/main/Header'
import App from './App.jsx'
>>>>>>> e2a07f0 (chore:amending Header import directory from components to pages)
import './index.css'
import App from './App'
import HostInfo from './pages/host_info/HostInfo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HostInfo />
  </React.StrictMode>,
)
