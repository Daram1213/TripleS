import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Box, Typography } from '@mui/material'

const HotelRoomComponent = ({
  roomData,
  roomType,
  setSelectedRoom,
  setSelectedRoomType,
}) => {
  useEffect(() => {
    handleSelectRoom()
  }, [roomData, roomType])

  const handleSelectRoom = () => {
    setSelectedRoom(roomData)
    setSelectedRoomType(roomType)
  }

  return (
    <Box className="bg-white p-6 rounded-lg shadow-md mb-4">
      {' '}
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {roomType.types}
      </Typography>
      <Box className="flex space-x-4 mb-4">
        <Box className="w-1/3">
          {/* Image container */}
          <Box className="bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden">
            {roomType.image ? (
              <img
                src={roomType.image}
                alt={`Room image of ${roomType.image}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCamera}
                className="text-gray-400 h-12 w-12 mx-auto"
              />
            )}
          </Box>
        </Box>
        <Box className="w-2/3 space-y-2">
          <Box className="flex items-center">
            <FontAwesomeIcon
              icon={faBed}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">Bed Type: {roomType.bedType}</p>
          </Box>
          <Box className="flex items-center">
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">Capacity: {roomType.capacity}</p>
          </Box>
          <Box className="flex items-center">
            <FontAwesomeIcon
              icon={faExpand}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">Size: {roomType.size}㎡</p>
          </Box>
          <Box className="flex items-center">
            <FontAwesomeIcon
              icon={faMoneyBill}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">
              Price: {roomType.price.toLocaleString()}원
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-end mt-auto">
        <button
          onClick={handleSelectRoom}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          객실 선택하기
        </button>
      </Box>
    </Box>
  )
}

export default HotelRoomComponent
