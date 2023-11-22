/* eslint-disable import/no-unresolved */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './pages/main/Header'
import Footer from './components/main/Footer'
import Filtering from './components/main/Filtering/Filtering'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Filtering />
    <Footer />
  </React.StrictMode>,
)
