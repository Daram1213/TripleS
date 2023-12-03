import { Map, MapMarker } from 'react-kakao-maps-sdk'
import React from 'react'

function Kakao({ lodgingData }) {
  console.log(lodgingData)
  return (
    <>
      <div class="border-b border-gray-300 py-4"></div>
      <div className="container mx-auto">
        <div className="flex flex-col mt-10">
          <div className="flex-grow">
            <div className="flex flex-col items-center justify-center w-full">
              <div class="container mx-auto px-4 py-2">
                <h1 class="text-xl font-semibold text-gray-800">숙소 위치</h1>
              </div>
              <div className="w-full max-w-4xl">
                <Map
                  center={{
                    lat: lodgingData.lodging.map.latitude,
                    lng: lodgingData.lodging.map.longitude,
                  }}
                  style={{ width: '100%', height: '600px' }}
                  level={3}
                  className="rounded-lg shadow-lg"
                >
                  <MapMarker
                    position={{
                      lat: lodgingData.lodging.map.latitude,
                      lng: lodgingData.lodging.map.longitude,
                    }}
                  />
                </Map>
              </div>
            </div>
          </div>
          <div className="flex-shrink">
            <div className="flex justify-between">
              <div className="text-xl">{lodgingData.lodging.name}</div>
              <div className="flex">
                <button className="py-2 px-4 rounded-md bg-gray-500 text-white">
                  +
                </button>
                <button className="py-2 px-4 rounded-md bg-gray-500 text-white">
                  -
                </button>
              </div>
            </div>
            <div className="text-gray-500">
              {lodgingData.lodging.description}
              <a href="#">더 보기</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kakao
