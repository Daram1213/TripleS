import React from 'react'
import DetailHeader from './detail/DetailHeader'
import LodgingComponent from './detail/LodgingComponent'
import CalendarComponent from './detail/CalendarComponent'
import DetailFooter from './detail/DetailFooter'

const DetailPage = ({ lodgingData, reservations, setReservations }) => {
  return (
    <>
      <DetailHeader />
      <LodgingComponent lodging={lodgingData} />
      <CalendarComponent setReservations={setReservations} />
      <DetailFooter lodging={lodgingData} reservations={reservations} />
    </>
  )
}

export default DetailPage
