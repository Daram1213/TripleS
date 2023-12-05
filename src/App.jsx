import { Outlet } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainPage from './pages/MainPage'
import HotelPage from './pages/main/HotelPage/HotelPage'
import HotelSearchPage from './pages/main/HotelPage/HotelSearch/HotelSearchPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/search/SearchPage'
import SearchHotelList from './pages/search/SearchHotelList'
import SearchTourList from './pages/search/SearchTourList'
import TourDetail from './pages/tour/tourDetail'
import MyPage from './pages/main/Mypage/Mypage'
import LikedPlace from './components/tempMyPage/likedPlaces'

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
                <Route path="/hotel" element={<HotelPage />} />
                <Route path="/hotel/search" element={<HotelSearchPage />} />
                <Route path="/myPage" element={<MyPage />} />
                {/* 통합검색, 호텔리스트, 여행지리스트 */}
                <Route path="/searchList/:keyword" element={<SearchPage />} />
                <Route
                  path="/searchHotelList/:keyword"
                  element={<SearchHotelList />}
                />
                <Route
                  path="/searchTourList/:keyword"
                  element={<SearchTourList />}
                />
                <Route
                  path="/hotelDetail/:lodgingId"
                  element={<DetailPage />}
                />
                <Route path="/tourDetail/:tourId" element={<TourDetail />} />
                <Route path="/like" element={<LikedPlace />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
