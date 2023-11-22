/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './pages/main/Header.jsx'
import Filtering from './pages/main/Filtering/Filtering.jsx'
import Footer from './pages/main/Footer.jsx'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Filtering />
    <Footer />
  </React.StrictMode>,
)
