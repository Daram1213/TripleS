import React, { useEffect } from 'react'
import { Grid, Box, Typography } from '@mui/material'

const { kakao } = window

const Kakao = () => {
  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      console.error('Kakao Maps API is not loaded')
      return // Kakao Maps API가 없으면 여기서 함수를 종료합니다.
    }

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
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box className="font-bold text-xl mb-2">숙소 위치</Box>
      <Map
        center={{
          lat: lodgingData.lodging.map.latitude,
          lng: lodgingData.lodging.map.longitude,
        }}
        style={{ width: '800px', height: '600px' }}
        level={3}
      >
        <MapMarker
          position={{
            lat: lodgingData.lodging.map.latitude,
            lng: lodgingData.lodging.map.longitude,
          }}
        >
          {' '}
        </MapMarker>
      </Map>
    </div>
  )
}

export default Kakao
