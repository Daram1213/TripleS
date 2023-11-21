// RoomComponent.js
import React from 'react'
import { Typography } from '@mui/material'

const RoomComponent = ({ room }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{room.name}</div>
        <div className="text-gray-700 text-base">
          <Typography color="text.secondary">
            {room.type} - {room.bedType}
          </Typography>
          <Typography variant="body2">Capacity: {room.capacity}</Typography>
          <Typography variant="body2">
            Size: {room.size} sqft, Floor: {room.floor}
          </Typography>
          <Typography variant="body2">1박 ${room.price}</Typography>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {room.amenities.map((amenity, index) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={index}
          >
            {amenity}
          </span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-2">
        {room.status ? (
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            예약 가능
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            예약 불가
          </span>
        )}
      </div>
    </div>
  )
}

export default RoomComponent
