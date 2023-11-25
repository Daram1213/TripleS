import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { FaDoorClosed } from 'react-icons/fa'

function Item1({ title, contents }) {
  return (
    <Box className="item1">
      <Box className="item1 flex flex-row mb-2 mt-2">
        <Box className="item1-container flex">
          <Box className="item1-icon m-2">
            <FaDoorClosed size="40" />
          </Box>
          <Box className=" flex flex-col ml-10 justify-center">
            <Typography className="item1-title font-bold text-sm">
              {title}
            </Typography>
            <Typography className="item1-contents text-sm">
              {contents}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Item1
