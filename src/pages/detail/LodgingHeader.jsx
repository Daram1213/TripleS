import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, ShareIcon } from '@heroicons/react/outline'

const LodgingHeader = ({ lodgingData }) => {
  console.log(lodgingData)
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-semibold">{lodgingData.lodging.name}</h1>
        <div className="flex items-center text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5" />
          ))}
          <span className="text-gray-600 ml-1">
            {lodgingData.lodging.avgRating}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          후기 {lodgingData.lodging.review.length}
        </div>
        <div className="text-sm text-gray-500">
          후기 {lodgingData.lodging.address}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          aria-label="Save"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <HeartIcon className="h-6 w-6" />
        </button>
        <button
          aria-label="Share"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ShareIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default LodgingHeader
