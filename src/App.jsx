import { Outlet } from 'react-router'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainPage from './pages/MainPage'
import HotelPage from './pages/main/HotelPage/HotelPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/search/SearchPage'
import SearchDetailPage from './pages/search/SearchDetailPage'
import SearchHotelList from './pages/search/SearchHotelList'
import SearchTourList from './pages/search/SearchTourList'

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
                <Route path="/searchList/:keyword" element={<SearchPage />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                <Route
                  path="/searchHotelList/:keyword"
                  element={<SearchHotelList />}
                >
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                <Route
                  path="/searchTourList/:keyword"
                  element={<SearchTourList />}
                >
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                <Route path="/search-detail" element={<SearchDetailPage />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
