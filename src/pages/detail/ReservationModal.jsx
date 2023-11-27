import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Box, Typography, Button } from '@mui/material'
import CloseIcon from '../../assets/svg/CloseIcon'

const ReservationModal = ({ lodgingData, closeModal, reservations }) => {
  // 더미 데이터
  const roomTypeData = {
    name: 'Deluxe Sea View', // 객실 이름
    types: 'Deluxe', // 유형
    bedType: 'King Size', // 침대 유형
    price: 200000, // 1박 요금
    capacity: 2, // 수용 가능 인원
    size: 35, // 방의 크기 (예: 평방미터)
    image: [
      'https://example.com/images/room1.jpg', // 객실 사진 URL
      'https://example.com/images/room2.jpg',
    ],
    amenities: [
      'Free WiFi', // 제공되는 편의 시설
      'Air Conditioning',
      'Mini Bar',
    ],
  }

  const roomBookingData = {
    status: true,
    checkInDate: '2023-12-01',
    checkOutDate: '2023-12-05',
    adults: 2,
    children: 1,
    bookingStatus: 'confirmed',
  }

function ReservationModal({ closeModal, lodgingData, reservations }) {
  const checkInDate = dayjs(reservations[0].checkInDate)
  const checkOutDate = dayjs(reservations[0].checkOutDate)
  const totalNights = checkOutDate.diff(checkInDate, 'day')
  const pricePerNight = roomTypeData.price
  const totalPrice = pricePerNight * totalNights

  const [isReserved, setIsReserved] = useState(false)

  const handleReservation = () => {
    setIsReserved(true)
  }

  useEffect(() => {
    // 모달이 열릴 때
    document.body.style.overflow = 'hidden'

    // 클린업 함수: 모달이 닫힐 때
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <Box className="fixed inset-0 bg-black bg-opacity-50 overflow-y-hidden h-full w-full flex justify-center items-center z-50">
      <Box
        className="bg-white p-4 md:p-8 rounded-lg shadow-2xl max-w-md mx-auto"
        style={{ borderRadius: 10 }}
      >
        <Box className="text-center space-y-4">
          <Typography
            variant="h6"
            className="font-bold text-gray-900"
            style={{ fontWeight: 'bold' }}
          >
            예약 요청
          </Typography>

          <Box className="flex items-center">
            <img
              src={lodgingData.image[0]}
              alt="객실 이미지"
              className="max-w-full mx-auto rounded-lg"
              style={{ maxWidth: '30%', height: 'auto', borderRadius: 10 }}
            />
            <Typography className="text-3xl font-bold text-gray-900 ml-4">
              {lodgingData.name}, {lodgingData.address}
            </Typography>
          </Box>
          <Box className="space-y-2">
            <Box>
              <Typography
                className="text-gray-800"
                style={{ fontWeight: 'bold' }}
              >
                날짜
              </Typography>
              <Typography className="text-gray-800">
                {checkInDate.format('YYYY.MM.DD')}~
                {checkOutDate.format('YYYY.MM.DD')}
              </Typography>
            </Box>
            <Box>
              <Typography
                className="text-gray-800"
                style={{ fontWeight: 'bold' }}
              >
                인원
              </Typography>
              <Typography className="text-gray-800">
                성인 {roomBookingData.adults} / 아이{roomBookingData.children}
              </Typography>
            </Box>
          </Box>
          {!isReserved ? (
            <Button
              onClick={handleReservation}
              variant="contained"
              color="primary"
              className="w-full rounded-full transition duration-300 ease-in-out hover:bg-pink-700"
            >
              예약하기
            </Button>
          ) : (
            <Box className="text-lg text-green-700 bg-green-100 py-2 px-4 rounded-md border border-green-200">
              예약되었습니다!
            </Box>
          )}
          <Typography className="text-sm text-gray-500">
            예약 확정 전에는 요금이 청구되지 않습니다.
          </Typography>
          <Box className="pt-4 border-t-2">
            <Typography className="text-lg font-semibold">
              ₩{pricePerNight.toLocaleString()} x {totalNights}박
            </Typography>
            <Typography className="text-xl font-bold">
              총합계 ₩{totalPrice.toLocaleString()}
            </Typography>
          </Box>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600"
          >
            <CloseIcon />
          </button>
        </Box>
      </Box>
    </Box>
  )
}

export default ReservationModal
