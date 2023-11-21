/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/main/Header'
import './index.css'
import Footer from './components/main/Footer'
import Filtering from './filtering'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Filtering />
    <Footer />
  </React.StrictMode>,
)
