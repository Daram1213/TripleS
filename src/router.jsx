import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import SearchDetailPage from './pages/SearchDetailPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-detail" element={<SearchDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
