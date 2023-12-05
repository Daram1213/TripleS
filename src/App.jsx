import { Outlet } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainPage from './pages/MainPage'
import HotelPage from './pages/main/HotelPage/HotelPage'
import HotelDetailPage from './pages/HotelDetailPage'
import SearchPage from './pages/search/SearchPage'
import SearchHotelList from './pages/search/SearchHotelList'
import SearchTourList from './pages/search/SearchTourList'
import TourDetail from './pages/tour/tourDetail'

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
                  element={<HotelDetailPage />}
                />
              </Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
