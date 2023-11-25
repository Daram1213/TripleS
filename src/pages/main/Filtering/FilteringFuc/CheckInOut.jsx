import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { DemoItem, DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Box, Typography } from '@mui/material'

export default function CheckInOut() {
  const [checkInDate, setCheckInDate] = useState(dayjs('2022-04-17'))
  const [checkOutDate, setCheckOutDate] = useState(dayjs('2022-04-17'))
  const [nightCount, setNightCount] = useState(0)

  // 날짜 변경에 따른 몇 박 몇 일 계산
  useEffect(() => {
    const nights = checkOutDate.diff(checkInDate, 'day')
    setNightCount(nights)
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
        <Box display="flex" alignItems="center">
          <Box flex="1">
            <DemoItem label="체크인">
              <DatePicker
                value={checkInDate}
                onChange={(date) => setCheckInDate(date)}
              />
            </DemoItem>
          </Box>

          <Box>
            <Typography className="text-xs">
              {nightCount} 박 {nightCount + 1} 일
            </Typography>
          </Box>

          <Box ml={2}>
            <DemoItem label="체크아웃">
              <DatePicker
                value={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                minDate={checkInDate.add(1, 'day')}
              />
            </DemoItem>
          </Box>
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  )
}
