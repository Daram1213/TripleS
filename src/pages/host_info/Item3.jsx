import React from 'react'
import { IoKeyOutline } from 'react-icons/io5'

function Item3({ title, contents }) {
  return (
    <div className="item3">
      <div className="item3 flex flex-row mb-2 mt-2">
        <div className="item3-container flex">
          <div className="item3-icon m-2">
            <IoKeyOutline size="40" color="" />
          </div>
          <div className=" flex flex-col ml-10 justify-center">
            <div className="text-base font-bold">
              <h3 className="item3-title">{title}</h3>
            </div>
            <div className="text-sm">
              <div className="item3-contents">{contents}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item3
