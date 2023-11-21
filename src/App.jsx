<<<<<<< HEAD
import { Outlet } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/search/SearchPage'
import SearchDetailPage from './pages/search/SearchDetailPage'

function App() {
  const theme = createTheme()

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route element={<Outlet />}>
                <Route path="/" element={<MainPage />} />
                {/* 통합검색, 호텔리스트, 여행지리스트 */}
                <Route path="/searchList/:keyword" element={<SearchPage />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                <Route path="/search-detail" element={<SearchDetailPage />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
=======
import { useState } from 'react'
import './App.css'
import HostInfo from './components/host_info/HostInfo'
import Item1 from './components/host_info/Item1'
import Item2 from './components/host_info/Item2'
import Item3 from './components/host_info/Item3'

function App() {
  const hostData = {
    name: '',
    year: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D',
  }
  return (
    <div className="flex ml-3 max-w-lg">
      <div className="host_info">
        <HostInfo {...hostData} />

        <div className="flex content-evenly h-80 w-5/6 flex-wrap border-y-2">
          <div className="host-items flex flex-col">
            <Item1
              title="셀프 체크인"
              contents="스마트 도어록을 이용해
              체크인하세요."
            />

            <Item2
              title="n님은 슈퍼호스트입니다."
              contents="슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는
              호스트입니다."
            />

            <Item3
              title="순조로운 체크인 과정"
              contents="최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준
              숙소입니다."
            />
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
>>>>>>> e363cb2 (host info UI completed)
  )
}

export default App
