import React, { useState } from 'react'
import {
  WifiIcon,
  AdjustmentsIcon,
  DesktopComputerIcon,
  CogIcon,
} from '@heroicons/react/outline'

const AmenitiesComponent = ({ lodgingData }) => {
  const [expanded, setExpanded] = useState(false)

  const getIconComponent = (amenityName) => {
    switch (amenityName) {
      case '와이파이':
        return <WifiIcon className="h-5 w-5 text-gray-500" />
      case '에어컨':
        return <AdjustmentsIcon className="h-5 w-5 text-gray-500" />
      case 'TV':
        return <DesktopComputerIcon className="h-5 w-5 text-gray-500" />
      // Add cases for other amenities
      default:
        return <CogIcon className="h-5 w-5 text-gray-500" /> // Placeholder for default case
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4 mb-4">
      <h3 className="text-xl font-semibold mb-4">숙소 편의시설</h3>
      <ul className={`${expanded ? '' : 'max-h-24 overflow-hidden'}`}>
        {lodgingData.roomType
          .flatMap((room) => room.amenities)
          .map((amenity, index) => (
            <li key={index} className="flex items-center space-x-2 mb-3">
              {getIconComponent(amenity)}
              <span className="text-sm">{amenity}</span>
            </li>
          ))}
      </ul>
      <button
        className="w-full text-center py-2 mt-4 bg-gray-100 text-gray-700 rounded-md"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '숨기기' : '편의시설 모두 보기'}
      </button>
    </div>
  )
}

export default AmenitiesComponent
