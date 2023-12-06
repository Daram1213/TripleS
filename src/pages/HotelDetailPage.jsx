import React, { useState, useEffect } from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import ReservationModal from './detail/ReservationModal'
import { useParams } from 'react-router'
import Kakao from './detail/Kakao'
import Grid from '@mui/material/Grid'
import { getLodgingData } from '../fetch/fetchLodging'
import CommonHeader from './main/CommonHeader'

function App() {
  const [lodging, setLodging] = useState(null)
  const [rooms, setRooms] = useState([])
  const { lodgingId } = useParams()
  useEffect(() => {
    const fetchLodgingData = async () => {
      try {
        const data = await getLodgingData(lodgingId)
        setLodging(data)
        setRooms(data?.lodging?.rooms)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (lodgingId) {
      fetchLodgingData()
    }
  }, [lodgingId])

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedRoomType, setSelectedRoomType] = useState(null)

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  })

  return (
    <div>
      {lodging ? (
        <>
          <CommonHeader />
          <LodgingComponent
            lodgingData={lodging}
            setSelectedRoomType={setSelectedRoomType}
            setSelectedRoom={setSelectedRoom}
          />

          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={6}>
              <CalendarComponent
                lodgingData={lodging}
                setRooms={setRooms}
                setSelectedDates={setSelectedDates}
              />
            </Grid>
            <Grid item xs={6}>
              <ReservationModal
                lodgingData={lodging}
                selectedRoom={selectedRoom}
                selectedRoomType={selectedRoomType}
                selectedDates={selectedDates}
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
