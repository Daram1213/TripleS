import React from 'react'
import { Box, Button } from '@mui/material'
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

      <Box className="w-8/12 h-fit ml-2">
        <CheckInOut />
      </Box>

      <Box className="ml-2 border-t border-b border-l border-r border-grey rounded-l w-7/12">
        <RoomCount />
      </Box>

      <Box className="flex justify-center items-center ml-2 w-2/12">
        <Button
          variant="contained"
          className="flex items-center justify-center text-white bg-blue-600 w-full h-10 text-lg rounded-r-lg rounded-l-lg p-2 transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <IoSearch className="text-xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
