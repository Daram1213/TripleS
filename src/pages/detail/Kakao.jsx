import React, { useEffect } from 'react'
import { Box } from '@mui/material'

const { kakao } = window

const Kakao = ({ lodgingData }) => {
  console.log(lodgingData.map.latitude)
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(
        lodgingData.map.latitude,
        lodgingData.map.longitude,
      ),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
  }, [lodgingData])

  return (
    <Box
      id="map"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></Box>
  )
}

export default Kakao
