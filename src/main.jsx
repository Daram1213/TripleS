/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/main/Header'
import './index.css'
import './footer.jsx'
import Footer from './footer.jsx'
import Filtering from './filtering.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Filtering />
    <Footer />
  </React.StrictMode>,
)
