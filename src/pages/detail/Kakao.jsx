import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { Box } from '@mui/material'

const Kakao = ({ lodgingData }) => {
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
