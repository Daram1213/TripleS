import { useState } from 'react'
import React from 'react'

function HostInfo({ name, year, imageUrl }) {
  return (
    <div className="flex flex-row mb-2 mt-2 w-5/6 border-t-2 ">
      <div className="host-container flex">
        <div className="host-thumbnail">
          <img
            className="w-12 h-12 object-cover rounded-full mt-5 mb-5"
            alt=""
            src={imageUrl}
          />
        </div>
        <div className="host-profile flex flex-col ml-10 justify-center">
          <div className="text-base font-bold">
            <h3>호스트: {name}님 </h3>
          </div>
          <div className="text-sm ">
            <div>호스트 경력 {year}년 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostInfo
