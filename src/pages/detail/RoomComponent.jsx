// RoomComponent.js
import React from 'react'
import { Box, Typography } from '@mui/material'

const RoomComponent = () => {
  // 더미 데이터
  const roomTypeData = {
    name: 'Deluxe Sea View', // 객실 이름
    types: 'Deluxe', // 유형
    bedType: 'King Size', // 침대 유형
    price: 200000, // 1박 요금
    capacity: 2, // 수용 가능 인원
    size: 35, // 방의 크기 (예: 평방미터)
    image: [
      'https://example.com/images/room1.jpg', // 객실 사진 URL
      'https://example.com/images/room2.jpg',
    ],
    amenities: [
      'Free WiFi', // 제공되는 편의 시설
      'Air Conditioning',
      'Mini Bar',
    ],
  }

  return (
    <Box className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <Box className="px-6 py-4">
        <Box className="font-bold text-xl mb-2">{roomTypeData.name}</Box>
        <Box className="text-gray-700 text-base">
          <Typography color="text.secondary">
            {roomTypeData.type} - {roomTypeData.bedType}
          </Typography>
          <Typography variant="body2">
            Capacity: {roomTypeData.capacity}
          </Typography>
          <Typography variant="body2">
            Size: {roomTypeData.size} sqft, Floor: {roomTypeData.floor}
          </Typography>
          <Typography variant="body2">1박 ${roomTypeData.price}</Typography>
        </Box>
      </Box>
      {/* <Box className="px-6 pt-4 pb-2">
        {room.status ? (
          <Box className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            예약 가능
          </Box>
        ) : (
          <Box className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            예약 불가
          </Box>
        )}
      </Box> */}
    </Box>
  )
}

export default RoomComponent
