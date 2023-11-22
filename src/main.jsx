import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './footer.jsx'
import Footer from './footer.jsx'
import Filtering from './filtering.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Filtering />
    <Footer />
  </React.StrictMode>,
)
