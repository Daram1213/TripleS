import React, { useState, useEffect } from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import DetailFooter from './detail/DetailFooter'
import ReservationModal from './detail/ReservationModal'
import { useParams } from 'react-router'
import Kakao from './detail/Kakao'

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

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  console.log(lodging)

  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedRoomType, setSelectedRoomType] = useState(null)

  console.log(selectedRoom)
  console.log(selectedRoomType)

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
          <CalendarComponent
            lodgingData={lodging}
            setRooms={setRooms}
            setSelectedDates={setSelectedDates}
          />
          <Kakao lodgingData={lodging} />
          <DetailFooter
            lodgingData={lodging}
            rooms={rooms}
            openModal={handleOpenModal}
            selectedRoom={selectedRoom}
            selectedRoomType={selectedRoomType}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
          />
          {isModalOpen && (
            <ReservationModal
              closeModal={closeModal}
              lodgingData={lodging}
              rooms={rooms}
              selectedRoom={selectedRoom}
              selectedRoomType={selectedRoomType}
              selectedDates={selectedDates}
            />
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
