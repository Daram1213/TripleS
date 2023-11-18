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
import { FaDoorClosed } from 'react-icons/fa'
import { PiMedalMilitary } from 'react-icons/pi'
import { IoKeyOutline } from 'react-icons/io5'
import './App.css'

const HostInfo = () => {
  const [hostName, setHostName] = useState('')
  setHostName((currentHostName) => {
    return `${currentHostName}님`
  })
}

function App() {
  return (
    <div className="flex ml-3 max-w-lg">
      <div className="host_info">
        <div className="flex flex-row mb-2 mt-2 w-5/6 border-t-2 ">
          <div className="host-container flex">
            <div className="host-thumbnail">
              <img
                className="w-12 h-12 object-cover rounded-full mt-5 mb-5"
                alt=""
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
            <div className="host-profile flex flex-col ml-10 justify-center">
              <div className="text-base font-bold">
                <h3>호스트: {hostName}님 </h3>
              </div>
              <div className="text-sm ">
                <div>호스트 경력 n년 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex content-evenly h-80 w-5/6 flex-wrap border-y-2">
          <div className="host-items flex flex-col">
            <div className="item1 flex flex-row mb-2 mt-2">
              <div className="item1-container flex">
                <div className="item1-icon m-2">
                  <FaDoorClosed size="40" color="" />
                </div>
                <div className=" flex flex-col ml-10 justify-center">
                  <div className="text-base font-bold">
                    <h3 className="item1-title">셀프 체크인</h3>
                  </div>
                  <div className="text-sm">
                    <div className="item1-contents">
                      스마트 도어록을 이용해 체크인하세요.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row mb-2 mt-2">
              <div className="item2-container flex">
                <div className="item2-icon m-2">
                  <PiMedalMilitary size="40" color="" />
                </div>

                <div className=" flex flex-col ml-10 justify-center">
                  <div className="text-base font-bold">
                    <h3 className="item1-title">a님은 슈퍼호스트입니다</h3>
                  </div>
                  <div className="text-sm">
                    <div className="item1-contents">
                      슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는
                      호스트입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row mb-2 mt-2">
              <div className="item3-container flex">
                <div className="item3-icon m-2">
                  <IoKeyOutline size="40" color="" />
                </div>

                <div className=" flex flex-col ml-10 justify-center">
                  <div className="text-base font-bold">
                    <h3 className="item1-title">순조로운 체크인 과정</h3>
                  </div>
                  <div className="text-sm">
                    <div className="item1-contents">
                      최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준
                      숙소입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
>>>>>>> e363cb2 (host info UI completed)
  )
}

export default App
