import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { PiMedalMilitary } from 'react-icons/pi'

function Item2Component({ title, contents }) {
  return (
    <Box className="item2">
      <Box className="item2 flex flex-row mb-2 mt-2">
        <Box className="item2-container flex">
          <Box className="item2-icon m-2">
            <PiMedalMilitary size="40" color="" />
          </Box>
          <Box className=" flex flex-col ml-10 justify-center">
            <Typography className="item2-title font-bold text-sm">
              {title}
            </Typography>
            <Typography className="item2-contents text-sm">
              {contents}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Item2Component
