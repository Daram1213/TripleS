import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Chip,
  Link,
} from '@mui/material'

const CancelledTrips = ({ reservation }) => {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleConfirm = () => {
    // Logic to confirm reservation
    setIsConfirmed(true)
  }

  const handleCancel = () => {
    // Logic to cancel reservation
    setIsConfirmed(false)
  }

  return (
    <div className="flex justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent>
          {/* Year and Dates */}
          <Typography color="text.secondary" gutterBottom>
            {reservation.year}
          </Typography>
          <Typography variant="h5" component="div" className="mb-2">
            {reservation.startDate}
          </Typography>
          <Typography className="text-blue-500 mb-2">
            {reservation.location}
          </Typography>

          {/* Reservation Details Link */}
          <Link
            href={reservation.detailsLink}
            className="text-blue-500 hover:text-blue-700"
          >
            예약 상세 보기
          </Link>

          {/* Divider */}
          <Divider className="my-4" />

          {/* Reservation Status Chip */}
          {isConfirmed ? (
            <Chip label="예약 확정" color="success" className="mb-4" />
          ) : (
            <Chip label="예약 취소" color="error" className="mb-4" />
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Button variant="outlined" onClick={handleConfirm}>
              예약 확정
            </Button>
            <Button variant="contained" color="error" onClick={handleCancel}>
              예약 취소
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CancelledTrips
