// RoomComponent.js
import React from 'react'
import { Box, Typography, Chip } from '@mui/material'

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
      'srcassetsdetail\room1.JPG', // 객실 사진 URL
      'srcassetsdetail\room2.JPG',
    ],
    amenities: [
      'Free WiFi', // 제공되는 편의 시설
      'Air Conditioning',
      'Mini Bar',
    ],
  }

  const roomDummyData = {
    roomId: 101, // 방 ID
    roomType: '5f8d04b5c29e3228a4b8b482', // 객실 유형 ID (예시로 MongoDB ObjectId 사용)
    roomNumber: 102, // 방번호
    floor: 1, // 방이 위치한 층수

    roomBooking: {
      status: true, // 예약 여부
      checkInDate: '2023-11-25', // 체크인 날짜
      checkOutDate: '2023-11-28', // 체크아웃 날짜
      adults: 2, // 성인 수
      children: 1, // 어린이 수
      bookingStatus: 'confirmed', // 예약 상태
    },
  }

  return (
    <Box className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <Box className="px-6 py-4">
        <Box className="font-bold text-xl mb-2">{roomTypeData.name}</Box>
        <Box className="text-gray-700 text-base">
          <Typography color="text.secondary">
            {roomTypeData.types} - {roomTypeData.bedType}
          </Typography>
          <Typography variant="body2">
            Capacity: {roomTypeData.capacity}
          </Typography>
          <Typography variant="body2">
            Size: {roomTypeData.size}, Floor: {roomDummyData.floor}
          </Typography>
          <Typography variant="body2">1박 ${roomTypeData.price}</Typography>
          <Chip
            label={roomDummyData.roomBooking.status ? '예약 가능' : '예약 불가'}
            color={roomDummyData.roomBooking.status ? 'success' : 'error'}
            variant="outlined"
          />
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
