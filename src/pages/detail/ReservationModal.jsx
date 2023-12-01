import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Modal, Box, Typography, Button, Paper, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { makeReservation } from '../../fetch/fetchLodging'
import { getUser } from '../../fetch/fetchLodging'
import axios from 'axios'

const ReservationModal = ({
  lodgingData,
  closeModal,
  selectedRoom,
  selectedRoomType,
  selectedDates,
}) => {
  const checkInDate = dayjs(selectedDates.startDate)
  const checkOutDate = dayjs(selectedDates.endDate)
  const totalNights = checkOutDate.diff(checkInDate, 'day')
  const pricePerNight = selectedRoomType.price
  const totalPrice = pricePerNight * totalNights

  const [isReserved, setIsReserved] = useState(false)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // Fetch user information when the component mounts
    axios
      .get('http://15.165.25.34:3000/api/users')
      .then((response) => {
        // Set the user data in the state
        setUserData(response.data)
        console.log(userData)
      })
      .catch((error) => {
        console.error('Error fetching user information:', error)
      })
  }, [])

  const handleReservation = async () => {
    // 예약 정보 객체 생성 (예시)
    const reservationData = {
      user: '6567aac0910622e34444b351',
      firstName: 'wonsik',
      lastName: 'seo',
      email: 'test@test.com',
      phoneNumber: '010-1111-1111',
      room: selectedRoomType._id,
      status: false,
      checkInDate: selectedDates.startDate,
      checkOutDate: selectedDates.endDate,
      adults: selectedRoom.roomBooking.adults,
      children: selectedRoom.roomBooking.children,
      request: specialRequest,
    }

    try {
      const reservationResult = await makeReservation(reservationData)

      console.log(reservationResult)

      if (reservationResult) {
        setIsReserved(true)
      }
    } catch (error) {
      // Handle the error as needed
    }
  }

  useEffect(() => {
    // 모달이 열릴 때
    document.body.style.overflow = 'hidden'

    // 클린업 함수: 모달이 닫힐 때
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  console.log(selectedRoom)
  console.log(selectedRoomType)

  const [specialRequest, setSpecialRequest] = useState('')

  return (
    <Modal open={true} onClose={closeModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
        className="max-w-md mx-auto"
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{ mb: 2, textAlign: 'center' }}
        >
          예약 요청
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            component="img"
            src={lodgingData.image}
            alt="객실 이미지"
            sx={{ width: '30%', borderRadius: 2, mr: 2 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {lodgingData.lodging.name}, {lodgingData.lodging.address}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            날짜
          </Typography>
          <Typography variant="body2">
            {checkInDate.format('YYYY.MM.DD')}~
            {checkOutDate.format('YYYY.MM.DD')}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            인원
          </Typography>
          <Typography variant="body2">
            성인 {selectedRoom.roomBooking.adults} / 아이{' '}
            {selectedRoom.roomBooking.children}
          </Typography>
        </Box>

        <TextField
          label="요청사항"
          variant="outlined"
          fullWidth
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          sx={{ mt: 2 }}
        />

        {!isReserved ? (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleReservation}
            sx={{ mt: 2 }}
          >
            예약하기
          </Button>
        ) : (
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mt: 2,
              backgroundColor: 'success.light',
              color: 'success.main',
              textAlign: 'center',
            }}
          >
            예약되었습니다!
          </Paper>
        )}

        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          예약 확정 전에는 요금이 청구되지 않습니다.
        </Typography>

        <Box sx={{ pt: 4, borderTop: 2, borderColor: 'divider' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            ₩{pricePerNight.toLocaleString()} x {totalNights}박
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            총합계 ₩{totalPrice.toLocaleString()}
          </Typography>
        </Box>

        <Button
          onClick={closeModal}
          sx={{ position: 'absolute', top: 16, right: 16 }}
          className="text-gray-400 hover:text-gray-600"
        >
          <CloseIcon />
        </Button>
      </Box>
    </Modal>
  )
}

export default ReservationModal
