// RoomComponent.js
import React from 'react'
import { Box, Typography, Chip, Button } from '@mui/material'

const RoomComponent = ({
  roomType,
  room,
  setSelectedRoomType,
  setSelectedRoom,
}) => {
  // 색상 팔레트
  const colorPalette = ['#6495ED', '#6A5ACD', '#6B8E23', '#C0C0C0', '#BDB76B']

  const isReservable = room?.roomBooking?.status

  const handleReserveClick = (roomType, room) => {
    // 선택한 roomType과 room 정보를 받아서 상태를 업데이트
    setSelectedRoomType(roomType)
    setSelectedRoom(room)

    // 선택한 roomType과 room을 콘솔에 출력
    console.log('Selected Room Type:', roomType)
    console.log('Selected Room:', room)
  }

  return (
    <Box className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <Box className="px-6 py-4">
        <Typography color="text.secondary">
          {roomType.types} - {roomType.bedType}
        </Typography>
        <Typography variant="body2">Capacity: {roomType.capacity}</Typography>
        <Typography variant="body2">
          Size: {roomType.size}, Floor: {room?.floor}
        </Typography>
        <Typography variant="body2">1박 ${roomType.price}</Typography>
        {room?.roomBooking && (
          <Chip
            label={isReservable ? '예약 가능' : '예약 불가'}
            color={isReservable ? 'success' : 'error'}
            variant="outlined"
          />
        )}
        {isReservable && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleReserveClick(roomType, room)}
          >
            선택하기
          </Button>
        )}
        <Box className="mt-2">
          {roomType.amenities.map((amenity, amenityIndex) => (
            <Chip
              key={amenityIndex}
              label={amenity}
              className="mr-2 mb-2"
              style={{
                backgroundColor:
                  colorPalette[amenityIndex % colorPalette.length],
                color: 'white',
              }}
            />
          ))}
        </Box>
      </Box>
      {roomType.image && (
        <img src={roomType.image} alt="Room" className="w-full" />
      )}
    </Box>
  )
}

export default RoomComponent
