import React from 'react'
import { FaDoorClosed } from 'react-icons/fa'

function Item1({ title, contents }) {
  return (
    <div className="item1">
      <div className="item1 flex flex-row mb-2 mt-2">
        <div className="item1-container flex">
          <div className="item1-icon m-2">
            <FaDoorClosed size="40" color="" />
          </div>
          <div className=" flex flex-col ml-10 justify-center">
            <div className="text-base font-bold">
              <h3 className="item1-title">{title}</h3>
            </div>
            <div className="text-sm">
              <div className="item1-contents">{contents}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item1
