import { Box } from '@mui/material'
import React from 'react'

const DetailFooter = ({ lodgingData, reservations, openModal }) => {
  // 더미 데이터
  const roomTypeData = {
    name: 'Deluxe Sea View', // 객실 이름
    types: 'Deluxe', // 유형
    bedType: 'King Size', // 침대 유형
    price: 200000, // 1박 요금
    capacity: 2, // 수용 가능 인원
    size: 35, // 방의 크기 (예: 평방미터)
    image: [
      'src/assets/detail/room1.JPG', // 객실 사진 URL
      'src/assets/detail/room2.JPG',
    ],
    amenities: [
      'Free WiFi', // 제공되는 편의 시설
      'Air Conditioning',
      'Mini Bar',
    ],
  }

  return (
    <Box>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <Box className="flex flex-col md:flex-row text-sm  dark:text-gray-400">
          <Box style={{ whiteSpace: 'nowrap' }}>
            <Box className="font-bold text-xl mb-2">
              ₩{roomTypeData.price} /박
            </Box>
          </Box>
          <Box className="md:ml-4" style={{ whiteSpace: 'nowrap' }}>
            <Box className="text-xl mb-2">
              {reservations[0].checkInDate} ~ {reservations[0].checkOutDate}
            </Box>
          </Box>
        </Box>

        <Box className="flex justify-end w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            예약하기
          </button>
        </Box>
      </footer>
    </Box>
  )
}

export default DetailFooter
