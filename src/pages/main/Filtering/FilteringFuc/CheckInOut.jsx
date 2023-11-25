import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { DemoItem, DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Box, Typography } from '@mui/material'

export default function CheckInOut() {
  const initialCheckInDate = dayjs('2022-04-17')
  const initialCheckOutDate = dayjs('2022-04-18') // Set to the next day for 1 night

  const [checkInDate, setCheckInDate] = useState(initialCheckInDate)
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate)
  const [nightCount, setNightCount] = useState(1)

  // 날짜 변경에 따른 몇 박 몇 일 계산
  useEffect(() => {
    const nights = dayjs(checkOutDate).diff(dayjs(checkInDate), 'day')
    setNightCount(nights >= 0 ? nights : 0)
  }, [checkInDate, checkOutDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        <Box className="flex">
          <Box className="w-full">
            <DemoItem label="체크인">
              <DatePicker
                value={checkInDate}
                onChange={(date) => setCheckInDate(date)}
              />
            </DemoItem>
          </Box>

          <Box className="flex mt-10 ml-2 whitespace-nowrap">
            <Typography className="text-xs">
              {nightCount} 박 {nightCount + 1} 일
            </Typography>
          </Box>

          <Box className="ml-2">
            <DemoItem label="체크아웃">
              <DatePicker
                value={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={dayjs(checkInDate).add(1, 'day')}
              />
            </DemoItem>
          </Box>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  )
}
