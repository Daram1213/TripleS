import React, { useState, useEffect } from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import ReservationModal from './detail/ReservationModal'
import { useParams } from 'react-router'
import Kakao from './detail/Kakao'
import Grid from '@mui/material/Grid'
import { getLodgingData } from '../fetch/fetchLodging'

function App() {
  const [lodging, setLodging] = useState(null)
  const [rooms, setRooms] = useState([])
  const { lodgingId } = useParams()

  console.log(lodgingId)
  useEffect(() => {
    const fetchLodgingData = async () => {
      try {
        const data = await getLodgingData(lodgingId)
        console.log(data)

        setLodging(data)
        setRooms(data?.lodging?.rooms)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchLodgingData() // 이 부분에서 lodgingId를 전달할 필요가 없습니다.
  }, [lodgingId]) // 의존성 배열에 lodgingId가 있습니다.

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedRoomType, setSelectedRoomType] = useState(null)

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  })

  console.log('lodging', lodging)

  return (
    <div>
      {lodging ? (
        <>
          <DetailHeader />
          <LodgingComponent
            lodgingData={lodging}
            setSelectedRoomType={setSelectedRoomType}
            setSelectedRoom={setSelectedRoom}
          />

          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <CalendarComponent
                lodgingData={lodging}
                setRooms={setRooms}
                setSelectedDates={setSelectedDates}
                style={{ flex: 1 }}
              />
            </Grid>
            <Grid item>
              <ReservationModal
                lodgingData={lodging}
                selectedRoom={selectedRoom}
                selectedRoomType={selectedRoomType}
                selectedDates={selectedDates}
                style={{ flex: 1 }}
              />
            </Grid>
          </Grid>

          <Kakao lodgingData={lodging} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
