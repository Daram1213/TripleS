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
<<<<<<< HEAD
import SearchHotelList from './pages/search/SearchHotelList'
import SearchTourList from './pages/search/SearchTourList'
=======
>>>>>>> bf2b05785dbf23a54960f32071aa48b6326477d5

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
<<<<<<< HEAD
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
=======
>>>>>>> bf2b05785dbf23a54960f32071aa48b6326477d5
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
