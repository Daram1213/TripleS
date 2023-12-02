import React, { useState } from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import DetailFooter from './detail/DetailFooter'
import ReservationModal from './detail/ReservationModal'

function DetailPage() {
  const lodgingData = {
    lodgingId: 1,
    destination: 'destinationId',
    types: 'hotel',
    theme: 'Ocean View',
    name: 'Sea Breeze Resort',
    address: {
      city: 'Yeongcheon',
      county: 'Gyeongsangbuk-do',
      district: 'District Name',
      detail: 'Detailed address here',
    },
    rooms: ['roomId1', 'roomId2'],
    option: [
      {
        category: 'Amenities',
        details: 'Free WiFi, Pool, Spa',
      },
    ],
    image: [
      'src/assets/detail/loadging.JPG',
      'src/assets/detail/loadging2.JPG',
      'src/assets/detail/loadging3.JPG',
      'src/assets/detail/loadging4.JPG',
      'src/assets/detail/loadging5.JPG',
      'src/assets/detail/loadging6.JPG',
    ],
    mainImage: 'src/assets/detail/loadging.JPG',
    description:
      '예술가가 기거하던 공간으로 집안 곳곳에서 전통염색과 예술작품을 즐기실 수 있습니다. 예술적이고 평온한 숙소에 머물며 걱정과 근심을 잊어보세요.',
  }

  const [reservations, setReservations] = useState([
    {
      status: true,
      checkInDate: '2023-03-01',
      checkOutDate: '2023-03-05',
      adults: 2,
      children: 1,
      bookingStatus: 'confirmed',
    },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <DetailHeader />
      <LodgingComponent lodgingData={lodgingData} />
      <CalendarComponent setReservations={setReservations} />
      <DetailFooter
        lodgingData={lodgingData}
        reservations={reservations}
        openModal={handleOpenModal}
      />
      {isModalOpen && (
        <ReservationModal
          closeModal={closeModal}
          lodgingData={lodgingData}
          reservations={reservations}
        />
      )}
    </>
  )
}

export default DetailPage