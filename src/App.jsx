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
<<<<<<< refs/remotes/origin/main
<<<<<<<
=======
>>>>>>> feat: create search main page, card UI, sidebar
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route element={<Outlet />}>
                <Route path="/" element={<MainPage />} />
<<<<<<< refs/remotes/origin/main

                {/* 통합검색, 호텔리스트, 여행지리스트 */}
                <Route path="/searchList/:keyword" element={<SearchPage />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                {/* <Route path="/hotelSearchList/:keyword" element={<HotelSearchList />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                <Route path="/tourSearchList/:keyword" element={<TourSearchList />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route> */}

                {/* <Route path="/detail" element={<DetailPage />} /> */}
<<<<<<< refs/remotes/origin/main
=======

>>>>>>> fix: fix css, routing, feat: update sidebar style that clicked
=======
                <Route path="/detail" element={<DetailPage />} />
                <Route path="/hotel-detail/:id" element={<DetailPage />} />
                <Route path="/search" element={<SearchPage />} />
>>>>>>> feat: create search main page, card UI, sidebar
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
