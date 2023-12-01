import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const ReservationPage = () => {
  const reservationData = {
    roomType: 'Deluxe Room',
    checkInDate: '2023-12-14',
    checkOutDate: '2023-12-15',
    adults: 2,
    children: 1,
    totalAmount: '$200',
  }

  return (
    <Box p={3} className="max-w-lg mx-auto mt-6">
      <Typography variant="h4" className="text-2xl font-semibold mb-4">
        Reservation Details
      </Typography>

      <div className="mb-4">
        <Typography variant="subtitle1" className="font-semibold">
          Room Type:
        </Typography>
        <Typography variant="subtitle1">{reservationData.roomType}</Typography>
      </div>

      <div className="mb-4">
        <Typography variant="subtitle1" className="font-semibold">
          Check-In Date:
        </Typography>
        <Typography variant="subtitle1">
          {reservationData.checkInDate}
        </Typography>
      </div>

      <div className="mb-4">
        <Typography variant="subtitle1" className="font-semibold">
          Check-Out Date:
        </Typography>
        <Typography variant="subtitle1">
          {reservationData.checkOutDate}
        </Typography>
      </div>

      <div className="mb-4">
        <Typography variant="subtitle1" className="font-semibold">
          Adults:
        </Typography>
        <Typography variant="subtitle1">{reservationData.adults}</Typography>
      </div>

      <div className="mb-4">
        <Typography variant="subtitle1" className="font-semibold">
          Children:
        </Typography>
        <Typography variant="subtitle1">{reservationData.children}</Typography>
      </div>

      <div className="mb-4">
        <Typography variant="subtitle1" className="font-semibold">
          Total Amount:
        </Typography>
        <Typography variant="subtitle1">
          {reservationData.totalAmount}
        </Typography>
      </div>

      <Button
        variant="contained"
        color="primary"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Confirm Reservation
      </Button>
    </Box>
  )
}

export default ReservationPage
