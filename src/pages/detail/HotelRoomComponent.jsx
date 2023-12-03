import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const HotelRoomComponent = ({
  roomData,
  roomType,
  setSelectedRoom,
  setSelectedRoomType,
}) => {
  const handleSelectRoom = () => {
    setSelectedRoom(roomData) // 객실 타입 설정
    setSelectedRoomType(roomType)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-2">{roomType.types}</h2>
      <div className="flex space-x-4 mb-4">
        <div className="w-1/3">
          {/* Image container */}
          <div className="bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden">
            {roomType.image ? (
              <img
                src={roomType.image}
                alt={`Room image of ${roomType.types}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCamera}
                className="text-gray-400 h-12 w-12 mx-auto"
              />
            )}
          </div>
        </div>
        <div className="w-2/3 space-y-2">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBed}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">Bed Type: {roomType.bedType}</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faUsers}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">Capacity: {roomType.capacity}</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faExpand}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">Size: {roomType.size}㎡</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faMoneyBill}
              size="lg"
              className="text-blue-500 mr-2"
            />
            <p className="text-sm">
              Price: {roomType.price.toLocaleString()}원
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-auto">
        <button
          onClick={handleSelectRoom}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          객실 선택하기
        </button>
      </div>
    </div>
  )
}

export default HotelRoomComponent
