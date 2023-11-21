import React, { useState } from 'react'
import LodgingComponent from './components/detail/LodgingComponent'
import CalendarComponent from './components/detail/CalendarComponent'
import DetailFooter from './components/detail/DetailFooter'

const Outlet = ({ lodgingData, reservations, setReservations }) => {
  return (
    <div className="Outlet">
      <LodgingComponent lodging={lodgingData} />
      <CalendarComponent setReservations={setReservations} />
      <DetailFooter lodging={lodgingData} reservations={reservations} />
    </div>
  )
}

export default Outlet
