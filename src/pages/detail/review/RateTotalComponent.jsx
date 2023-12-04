import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { LiaBroomSolid } from 'react-icons/lia'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoKeyOutline } from 'react-icons/io5'
import { SlSpeech } from 'react-icons/sl'
import { CiMap } from 'react-icons/ci'
import { GiPayMoney } from 'react-icons/gi'

function RateTotalComponent() {
  return (
    <Box className="flex flex-col ml-2 border-r-2">
      <Box className="totalRate_title text-xs w-20 ">
        전체평점
        <Box className="text-[12px] font-bold">
          <Box className="rate5">5</Box>
          <Box className="rate4">4</Box>
          <Box className="rate3">3</Box>
          <Box className="rate2">2</Box>
          <Box className="rate1">1</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RateTotalComponent
