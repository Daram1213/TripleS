import { useState, useEffect } from 'react'
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material'
import Swal from 'sweetalert2'
import { Button } from '@mui/base'
import fetchReservationList from '../../../fetch/fetchReservationList'

function Reservation() {
  const [reservationData, setReservationData] = useState(null)
  const [showButton, setShowButton] = useState(true)

  const handleReservationList = async (e) => {
    e.preventDefault()

    try {
      const result = await fetchReservationList()
      setReservationData(result)
      setShowButton(false)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '오류 발생',
        text: '회원 정보 업데이트 중 오류가 발생했습니다.',
      })
    }
  }

  useEffect(() => {
    handleReservationList()
  }, [])

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        예약정보
      </Typography>

      {reservationData && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>폰번호</TableCell>
              <TableCell>주문번호</TableCell>
              <TableCell>체크인</TableCell>
              <TableCell>체크아웃</TableCell>
              <TableCell>어른</TableCell>
              <TableCell>어린이</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservationData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.roomBookingId}</TableCell>
                <TableCell>{item.firstName + item.lastName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>{item.room}</TableCell>
                <TableCell>{item.checkInDate}</TableCell>
                <TableCell>{item.checkOutDate}</TableCell>
                <TableCell>{item.adults}</TableCell>
                <TableCell>{item.children}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {showButton && (
        <Button
          className="w-full bg-blue-600 text-white my-[1rem] rounded-md p-2 w-1/5"
          onClick={handleReservationList}
        >
          예약확인
        </Button>
      )}
    </Box>
  )
}

export default Reservation
