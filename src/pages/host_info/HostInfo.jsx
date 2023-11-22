import { useState } from 'react'
import React from 'react'
import { Box, Container, Typography } from '@mui/material'

function HostInfo({ name, year, imageUrl }) {
  return (
    <Box className="flex flex-row mb-2 mt-2 w-5/6 border-t-2 ">
      <Box className="host-container flex">
        <Box className="host-thumbnail">
          <img
            className="w-12 h-12 object-cover rounded-full mt-5 mb-5"
            alt=""
            src={imageUrl}
          />
        </Box>
        <Box className="host-profile flex flex-col ml-10 justify-center">
          <Typography className="text-base font-bold">
            <h3>호스트: {name}님 </h3>
          </Typography>
          <Typography className="text-sm ">
            <Box>호스트 경력 {year}년 </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HostInfo
