/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/main/Header'
import './index.css'
import App from './App.jsx'
import Filtering from './components/main/Filtering/Filtering.jsx'
import Footer from './components/main/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Filtering />
    <Footer />
  </React.StrictMode>,
)
