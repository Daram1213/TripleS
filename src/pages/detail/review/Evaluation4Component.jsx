import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { LiaBroomSolid } from 'react-icons/lia'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoKeyOutline } from 'react-icons/io5'
import { SlSpeech } from 'react-icons/sl'
import { CiMap } from 'react-icons/ci'
import { GiPayMoney } from 'react-icons/gi'

function Evaluation4Component({ name, rate }) {
  return (
    <Box className="flex flex-col ml-2 border-r-2">
      <Box className="evaluation1 w-20 ml-2">
        <Box className="evaluation1-name text-xs "> {name}</Box>
        <Box className="evaluation1-rate font-bold text-sm"> {rate}</Box>
        <Box className="evaluation1-icon mt-5">
          <SlSpeech size="40" />
        </Box>
      </Box>
    </Box>
  )
}

export default Evaluation4Component
