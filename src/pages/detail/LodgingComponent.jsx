import React, { useState, useEffect } from 'react'
import {
  Typography,
  Grid,
  Box,
  Chip,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import LodgingHeader from '../detail/LodgingHeader'
import GalleryComponent from './GalleryComponent'
import DescriptionComponent from './DescriptionComponent'
import AmenitiesComponent from './AmenitiesComponent'
import HotelRoomComponent from './HotelRoomComponent'

function LodgingComponent({
  lodgingData,
  setSelectedRoom,
  setSelectedRoomType,
}) {
  console.log('lodgingData.lodging', lodgingData.lodging)

  lodgingData.lodging.image = [
    '../../../src/assets/img/hotel/a1.jpeg',
    '../../../src/assets/img/hotel/a2.jpeg',
    '../../../src/assets/img/hotel/a3.jpeg',
    '../../../src/assets/img/hotel/aMain.jpeg',
    '../../../src/assets/img/hotel/b2.jpeg',
    '../../../src/assets/img/hotel/b1.jpeg',
    '../../../src/assets/img/hotel/b3.jpeg',
    '../../../src/assets/img/hotel/bMain.jpeg',
    '../../../src/assets/img/hotel/c1.jpeg',
    '../../../src/assets/img/hotel/c2.jpeg',
    '../../../src/assets/img/hotel/c3.jpeg',
    '../../../src/assets/img/hotel/cMain.jpeg',
    '../../../src/assets/img/hotel/d1.jpeg',
    '../../../src/assets/img/hotel/d2.jpeg',
    '../../../src/assets/img/hotel/d3.jpeg',
    '../../../src/assets/img/hotel/dMain.jpeg',
  ]

  const colorPalette = ['#6495ED', '#6A5ACD', '#6B8E23', '#C0C0C0', '#BDB76B'] // 색상 팔레트

  console.log(lodgingData.roomType)
  for (let i = 0; i < lodgingData.roomType.length; i++) {
    const imageExtension = i < 2 ? 'JPG' : 'jpg' // 1번째와 2번째는 JPG, 나머지는 jpg로 설정
    lodgingData.roomType[i].image = [
      `../../../src/assets/detail/room${i + 1}.${imageExtension}`,
      // 추가 이미지 경로들...
    ]
  }

  console.log(lodgingData.lodging.rooms)

  return (
    <Box className="mt-8 container mx-auto px-4">
      <LodgingHeader lodgingData={lodgingData} />
      <GalleryComponent lodgingData={lodgingData} />
      <DescriptionComponent lodgingData={lodgingData} />
      <AmenitiesComponent lodgingData={lodgingData} />
      {lodgingData.lodging.rooms.map((roomData, index) => {
        const roomType = lodgingData.roomType.find(
          (type) => type._id === roomData.roomType,
        )
        return (
          <HotelRoomComponent
            key={index}
            roomData={roomData}
            roomType={roomType || {}}
            setSelectedRoomType={setSelectedRoomType}
            setSelectedRoom={setSelectedRoom}
          />
        )
      })}
    </Box>
  )
}

export default LodgingComponent
