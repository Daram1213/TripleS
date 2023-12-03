import React, { useState, useEffect } from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import ReservationModal from './detail/ReservationModal'
import { useParams } from 'react-router'
import Kakao from './detail/Kakao'
import Grid from '@mui/material/Grid'

function App() {
  const [lodging, setLodging] = useState(null)
  const [rooms, setRooms] = useState([])
  const { lodgingId } = useParams()

  useEffect(() => {
    // Define the URL for the GET request
    const apiUrl = `http://15.165.25.34:3000/api/lodgings/${lodgingId}`

    // Make the GET request to the API
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved data to the 'lodging' state
        setLodging(data)
        setRooms(data?.lodging?.rooms)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [lodgingId])

  // lodging을 넘겨야함
  console.log(lodging)

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedRoomType, setSelectedRoomType] = useState(null)

  console.log(selectedRoom)
  console.log('selectedRoomType', selectedRoomType)

  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  })

  console.log(selectedDates)

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
