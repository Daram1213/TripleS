import { Outlet } from 'react-router'
import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'
import SearchDetailPage from './pages/SearchDetailPage'

const App = () => {
  // 더미 데이터
  const lodgingData = {
    types: ['hotel', 'guestHouse'], // 숙소 유형
    theme: '오션뷰', // 숙소 테마
    name: '영오대', // 숙소 이름
    address: 'Yeongcheon, 경상북도, 한국', // 숙소 주소
    rooms: [
      // ... Room 객체들
      {
        name: '스탠다드A',
        type: '싱글룸',
        price: '115000',
        capacity: 5,
        bedType: '퀸',
        size: '8평',
        floor: '2층',
        amenities: ['무선 인터넷', '넷플릭스', '무료 주차'],
        status: true,
      },
      {
        name: '스탠다드B',
        type: '더블룸',
        price: '125000',
        capacity: 3,
        bedType: '퀸',
        size: '6평',
        floor: '2층',
        amenities: ['바비큐', '여행 가방 보관 가능', '무료 주차'],
        status: true,
      },
    ],
    map: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    option: [
      {
        category: '개인 위생용품',
        details: '샴푸, 로션, 빗, 면도기, 샤워 캡 등 개인 위생용품 제공',
      },
    ],
    image: [
      'src/assets/detail/loadging.JPG',
      'src/assets/detail/loadging2.JPG',
      'src/assets/detail/loadging3.JPG',
      'src/assets/detail/loadging4.JPG',
      'src/assets/detail/loadging5.JPG',
      'src/assets/detail/loadging6.JPG',
    ],
    description:
      '예술가가 기거하던 공간으로 집안 곳곳에서 전통염색과 예술작품을 즐기실 수 있습니다. 예술적이고 평온한 숙소에 머물며 걱정과 근심을 잊어보세요.',
    review: [
      {
        objectId: '1',
        content: '아늑해요',
      },
    ],
  }

  const [reservations, setReservations] = useState([
    {
      userId: '12345',
      hotel: '영오대',
      transportation: '버스',
      checkInDate: '2023-03-01',
      checkOutDate: '2023-03-05',
      status: 'confirmed',
    },
    {
      userId: '67890',
      hotel: '프랑스 낭트',
      transportation: '도보',
      checkInDate: '2023-04-10',
      checkOutDate: '2023-04-15',
      status: 'waiting',
    },
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />} />
        <Route path="/" element={<MainPage />} />
        <Route
          path="/detail"
          element={
            <DetailPage lodgingData={lodgingData} reservations={reservations} />
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-detail" element={<SearchDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
