import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { PiMedalMilitary } from 'react-icons/pi'

function Item2({ title, contents }) {
  return (
    <Box className="item2">
      <Box className="item2 flex flex-row mb-2 mt-2">
        <Box className="item2-container flex">
          <Box className="item2-icon m-2">
            <PiMedalMilitary size="40" color="" />
          </Box>
          <Box className=" flex flex-col ml-10 justify-center">
            <Typography className="text-base font-bold">
              <h3 className="item2-title">{title}</h3>
            </Typography>
            <Typography className="text-sm">
              <Box className="item2-contents">{contents}</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Item2
