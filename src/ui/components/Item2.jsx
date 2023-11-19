import React from 'react'
import { PiMedalMilitary } from 'react-icons/pi'

function Item2({ title, contents }) {
  return (
    <div className="item2">
      <div className="item2 flex flex-row mb-2 mt-2">
        <div className="item2-container flex">
          <div className="item2-icon m-2">
            <PiMedalMilitary size="40" color="" />
          </div>
          <div className=" flex flex-col ml-10 justify-center">
            <div className="text-base font-bold">
              <h3 className="item2-title">{title}</h3>
            </div>
            <div className="text-sm">
              <div className="item2-contents">{contents}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item2
