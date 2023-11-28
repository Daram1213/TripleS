import { useState } from 'react'
import React from 'react'
import { Box, Container, Typography } from '@mui/material'

function HostInfoComponent({ name, year, imageUrl }) {
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
          <Box sx={{ fontWeight: 500, fontSize: 22 }}>호스트: {name}님</Box>
          <Typography className="text-xs">호스트 경력 {year}년</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HostInfoComponent
