import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { IoKeyOutline } from 'react-icons/io5'

function Item3({ title, contents }) {
  return (
    <Box className="item3">
      <Box className="item3 flex flex-row mb-2 mt-2">
        <Box className="item3-container flex">
          <Box className="item3-icon m-2">
            <IoKeyOutline size="40" color="" />
          </Box>
          <Box className=" flex flex-col ml-10 justify-center">
            <Typography className="text-base font-bold">
              <h3 className="item3-title">{title}</h3>
            </Typography>
            <Typography className="text-sm">
              <Box className="item3-contents">{contents}</Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Item3
