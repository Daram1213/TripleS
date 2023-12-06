import React, { useState, useEffect, useMemo } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { Grid, Box, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import { debounce } from 'lodash'

const CalendarComponent = ({ lodgingData, setRooms, setSelectedDates }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [selecting, setSelecting] = useState(true)

  useEffect(() => {
    setStartDate(null)
    setEndDate(null)
  }, [currentMonth])

  useEffect(() => {
    if (startDate || endDate) {
      updateRooms()
    }
  }, [startDate, endDate])

  const calendarValue = useMemo(() => {
    if (selecting) {
      return startDate ? dayjs(startDate) : null
    }
  }, [selecting, startDate, endDate])

  const resetCalendar = () => {
    setStartDate(null)
    setEndDate(null)
    setSelecting(true)
  }

  const debouncedHandleDateChange = debounce((newValue) => {
    const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : ''

    if (selecting) {
      // 시작 날짜 선택
      setStartDate(formattedDate)
      setSelecting(false)
    } else {
      if (!startDate || dayjs(formattedDate).isAfter(dayjs(startDate))) {
        setEndDate(formattedDate)
        setSelecting(true)
      } else {
        Swal.fire({
          title: '잘못된 날짜 선택',
          text: '시작 날짜는 종료 날짜보다 이전이어야 합니다.',
          icon: 'error',
          confirmButtonText: '확인',
        }).then(() => {
          resetCalendar()
        })
      }
    }
  }, 200)

  const updateRooms = () => {
    setRooms((rooms) =>
      rooms.map((room, index) =>
        index === 0
          ? { ...room, checkInDate: startDate, checkOutDate: endDate }
          : room,
      ),
    )

    setSelectedDates({ startDate, endDate })
  }

  const handleMonthChange = (date) => {
    setCurrentMonth(date)
  }

  function calculateNights(startDate, endDate) {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const timeDifference = end - start

    const nights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

    return nights
  }

  const nights = calculateNights(startDate, endDate)

  return (
    <>
      <Box className="flex justify-center items-center w-full h-full">
        <Box className="flex flex-col justify-center items-center w-full max-w-md p-4">
          <Box class="container mx-auto px-4 py-2">
            <Box class="border-b border-gray-300 py-4">
              <Typography class="text-xl font-semibold text-gray-800">
                {startDate && endDate
                  ? `${lodgingData.lodging.address}에서 ${nights}박`
                  : '숙박 일정을 선택하세요'}
              </Typography>
              {startDate && endDate && (
                <Typography class="text-sm text-gray-500">{`${startDate}~${endDate}`}</Typography>
              )}
            </Box>
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={calendarValue}
              onChange={(newValue) => debouncedHandleDateChange(newValue)}
              onMonthChange={handleMonthChange}
              className="rounded-lg shadow-lg"
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  )
}

export default CalendarComponent
