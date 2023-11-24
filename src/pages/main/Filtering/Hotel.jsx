import React from 'react'
import { Typography, Box } from '@mui/material'
import { IoSearch } from 'react-icons/io5'
import RoomCount from './FilteringFuc/RoomCount'
import Destination from './FilteringFuc/Destination'
import CheckInOut from './FilteringFuc/CheckInOut'

function Hotel() {
  return (
    <Box style={{ display: 'flex' }}>
      <Box className="w-8/12 h-fit">
        <Destination />
      </Box>

      {/* 체크인 · 체크아웃 */}
      <Box className="w-8/12 h-fit ml-2">
        <CheckInOut />
      </Box>

      <Box className="ml-2 border-t border-b border-l border-r border-grey rounded-l w-7/12">
        <RoomCount />
      </Box>

      {/* 검색 버튼 */}
      <Box>
        <button
          id="searchButton"
          className="flex justify-center items-center text-white bg-blue-600 w-6/12 h-full text-3xl rounded-r-lg p-3 transition duration-300 ease-in-out hover:bg-opacity-70"
        >
          <Box className="flex items-center p-3">
            <Typography className="hidden">검색</Typography>
            <IoSearch />
          </Box>
        </button>
      </Box>
    </Box>
  )
}

export default Hotel
