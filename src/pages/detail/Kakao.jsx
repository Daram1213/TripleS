import React, { useEffect } from 'react'
import { Grid, Box, Typography } from '@mui/material'

const { kakao } = window

const Kakao = ({ lodgingData }) => {
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(
        lodgingData.lodging.map.latitude,
        lodgingData.lodging.map.longitude,
      ),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)

    var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667)

    var marker = new kakao.maps.Marker({
      position: markerPosition,
    })

    marker.setMap(map)
  }, [lodgingData])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        sx={{
          width: '480px',
          height: '570px',
        }}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="font-bold text-xl mb-2">숙소 위치</Box>
        <Box id="map" style={{ width: '500px', height: '500px' }}></Box>
      </Grid>
    </Box>
  )
}

export default Kakao
