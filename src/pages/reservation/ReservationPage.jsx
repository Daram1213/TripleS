import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

const Sidebar = () => {
  // 사이드바 열기/닫기 상태 관리
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box
      className={`h-screen w-1/4 fixed bg-gray-200 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* 사이드바 내용 */}
      <Box p={3}>
        {/* 여기에 사이드바의 내용을 추가하세요 */}
        {/* 예를 들어 사이드바 메뉴 항목 등을 넣을 수 있습니다 */}
      </Box>
    </Box>
  )
}

const ReservationPage = () => {
  return (
    <Box>
      <Sidebar />
      <Box
        className={`ml-1/4 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 페이지 내용 */}
        <Box p={3} className="max-w-lg mx-auto mt-6">
          <Typography variant="h4" className="text-2xl font-semibold mb-4">
            Reservation Details
          </Typography>
          {/* ... 페이지 내용 */}
        </Box>
      </Box>
    </Box>
  )
}

export default ReservationPage
