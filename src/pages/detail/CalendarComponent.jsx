import React, { useState, useEffect, useMemo } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs' // Dayjs를 임포트합니다
import { Box } from '@mui/material'

const CalendarComponent = ({ setReservations }) => {
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
      updateReservations()
    }
  }, [startDate, endDate])

  const calendarValue = useMemo(() => {
    if (selecting) {
      return startDate ? dayjs(startDate) : null
    } else {
      return endDate ? dayjs(endDate) : null
    }
  }, [selecting, startDate, endDate])

  const handleDateChange = (newValue) => {
    const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : ''

    if (selecting) {
      setStartDate(formattedDate)
      setSelecting(false)
    } else {
      setEndDate(formattedDate)
      setSelecting(true)
    }
  }

  const updateReservations = () => {
    setReservations((prevReservations) =>
      prevReservations.map((reservation, index) =>
        index === 0 // 첫 번째 예약을 업데이트
          ? { ...reservation, checkInDate: startDate, checkOutDate: endDate }
          : reservation,
      ),
    )
  }

  const handleMonthChange = (date) => {
    setCurrentMonth(date)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box style={{ marginBottom: '70px' }}>
        <DateCalendar
          value={calendarValue}
          onChange={handleDateChange}
          onMonthChange={handleMonthChange}
        />
      </Box>
    </LocalizationProvider>
  )
}

export default CalendarComponent
