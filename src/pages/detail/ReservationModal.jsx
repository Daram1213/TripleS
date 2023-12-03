import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Modal, Box, Typography, Button, Paper, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { makeReservation } from '../../fetch/fetchLodging'
import { getUser } from '../../fetch/fetchLodging'
import axios from 'axios'
import Swal from 'sweetalert2'

const ReservationModal = ({
  lodgingData,
  closeModal,
  selectedRoom,
  selectedRoomType,
  selectedDates,
}) => {
  const checkInDate = dayjs(selectedDates?.startDate || new Date())
  const checkOutDate = dayjs(selectedDates?.endDate || new Date())
  const totalNights = checkOutDate.diff(checkInDate, 'day')
  const pricePerNight = selectedRoomType?.price || 0
  const totalPrice = pricePerNight * totalNights

  const [isReserved, setIsReserved] = useState(false)
  const [userData, setUserData] = useState(null)

  const fetchUserData = async () => {
    try {
      const userData = await getUser()
      console.log('userData', userData)
      setUserData(userData)
    } catch (error) {
      console.error('Failed to fetch user data:', error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, []) // useEffect를 사용하여 컴포넌트가 마운트될 때에만 데이터를 불러오도록 변경

  const handleReservation = async () => {
    if (!selectedRoom || !selectedDates.startDate || !selectedDates.endDate) {
      Swal.fire({
        title: '선택 필요',
        text: '객실과 일정을 먼저 선택하세요.',
        icon: 'warning',
      })
      return
    }

    const { value: confirm } = await Swal.fire({
      title: '예약 확인',
      text: '예약을 진행하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '예, 예약합니다',
      cancelButtonText: '아니오',
    })

    if (confirm) {
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
          // 예약이 성공하면 SweetAlert로 성공 메시지를 띄울 수 있습니다.
          Swal.fire({
            title: '예약 완료',
            text: '예약이 성공적으로 완료되었습니다.',
            icon: 'success',
          })
        }
      } catch (error) {
        // Handle the error as needed
        // 예약이 실패한 경우에도 SweetAlert로 에러 메시지를 띄울 수 있습니다.
        Swal.fire({
          title: '예약 실패',
          text: '예약을 처리하는 중에 오류가 발생했습니다.',
          icon: 'error',
        })
      }
    }
  }

  console.log(selectedRoom)
  console.log(selectedRoomType)

  const selectedRoomData = selectedRoom || { startDate: '', endDate: '' }
  const selectedRoomTypeData = selectedRoomType || { price: 0, capacity: 1 }

  const [specialRequest, setSpecialRequest] = useState('')

  return (
    <div
      class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md"
      style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      <div class="p-5">
        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900">
            ₩{selectedRoomTypeData.price}
          </span>
        </div>
        <div class="flex justify-between items-center mt-4">
          <div>
            <span class="block text-sm text-gray-600">체크인</span>
            <span class="block text-lg text-gray-800">
              {selectedRoomData.startDate}
            </span>
          </div>
          <div>
            <span class="block text-sm text-gray-600">체크아웃</span>
            <span class="block text-lg text-gray-800">
              {selectedRoomData.endDate}
            </span>
          </div>
        </div>
        <div class="mt-4">
          <label for="guests" class="text-sm text-gray-600">
            인원
          </label>
          <select
            id="guests"
            class="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>게스트 {selectedRoomTypeData.capacity}명</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="specialRequest" className="text-sm text-gray-600">
            요청사항
          </label>
          <textarea
            id="specialRequest"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            className="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows="4" // 원하는 높이로 조정 가능
            placeholder="특별한 요청사항을 입력하세요"
          ></textarea>
        </div>
        <button
          onClick={handleReservation}
          className="w-full px-4 py-3 mt-8 text-sm font-bold text-white uppercase bg-red-500 rounded"
        >
          예약하기
        </button>

        <p class="mt-4 text-xs text-center text-gray-600">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </p>
      </div>
      <div class="px-5 py-4 bg-gray-100">
        <div class="flex justify-between">
          <span>
            ₩{selectedRoomTypeData.price} x {totalNights}박
          </span>
          <span>₩{totalPrice}</span>
        </div>
        <div class="flex justify-between mt-4 font-bold">
          <span>총 합계</span>
          <span>₩{totalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default ReservationModal
