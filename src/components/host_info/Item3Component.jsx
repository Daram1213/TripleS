import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { IoKeyOutline } from 'react-icons/io5'

function Item3Component({ title, contents }) {
  return (
    <Box className="item3">
      <Box className="item3 flex flex-row mb-2 mt-2">
        <Box className="item3-container flex">
          <Box className="item3-icon m-2">
            <IoKeyOutline size="40" color="" />
          </Box>
          <Box className=" flex flex-col ml-10 justify-center">
            <Typography className="item3-title font-bold text-sm">
              {title}
            </Typography>
            <Typography className="item3-contents text-sm">
              {contents}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Item3Component
