import React, { useState } from 'react'
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  Collapse,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

function MyHeader() {
  const [open, setOpen] = useState(false)
  const [quantityRoom, setQuantityRoom] = useState(1)
  const [quantityAdult, setQuantityAdult] = useState(1)
  const [quantityChild, setQuantityChild] = useState(0)

  const handleRoomClick = () => {
    setOpen(!open)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // 객실당 인원 수
  const decreaseQuantityRoom = () => {
    if (quantityRoom > 1) {
      setQuantityRoom(quantityRoom - 1)
    }
  }

  const increaseQuantityRoom = () => {
    if (quantityRoom < 100) {
      setQuantityRoom(quantityRoom + 1)
    }
  }
  // 어른
  const decreaseQuantityAdult = () => {
    if (quantityAdult > 1) {
      setQuantityAdult(quantityAdult - 1)
    }
  }

  const increaseQuantityAdult = () => {
    if (quantityAdult < 100) {
      setQuantityAdult(quantityAdult + 1)
    }
  }

  // 어린이
  const decreaseQuantityChild = () => {
    if (quantityChild > 0) {
      setQuantityChild(quantityChild - 1)
    }
  }

  const increaseQuantityChild = () => {
    if (quantityChild < 100) {
      setQuantityChild(quantityChild + 1)
    }
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgColor: 'bg-gray-100' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          객실당 인원 수
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleRoomClick}>
        <ListItemText
          primary={`객실 ${quantityRoom}개, 성인 ${quantityAdult}명, 어린이 ${quantityChild}명`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className="pl-4">
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary="객실" />
              <Button onClick={decreaseQuantityRoom}>-</Button>
              <Typography>{quantityRoom}</Typography>
              <Button onClick={increaseQuantityRoom}>+</Button>
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary="성인" />
              <Button onClick={decreaseQuantityAdult}>-</Button>
              <Typography>{quantityAdult}</Typography>
              <Button onClick={increaseQuantityAdult}>+</Button>
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary="어린이" />
              <Button onClick={decreaseQuantityChild}>-</Button>
              <Typography>{quantityChild}</Typography>
              <Button onClick={increaseQuantityChild}>+</Button>
            </ListItem>
          </List>
          <Box className="flex justify-end mt-2">
            <Button
              onClick={handleClose}
              variant="contained"
              className="text-white bg-blue-600 text-base rounded-md transition duration-300 ease-in-out hover:bg-opacity-80 px-4 py-2"
            >
              확인
            </Button>
          </Box>
        </Box>
      </Collapse>
    </List>
  )
}

export default MyHeader
