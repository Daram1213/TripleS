import React, { useState } from 'react'
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Typography,
} from '@mui/material'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import { Link } from 'react-router-dom'

const LastReservations = ({ pastReservations }) => {
  const [reservationStatus, setReservationStatus] = useState(
    pastReservations.map(() => true), // Initialize with '예약 가능' for each reservation
  )

  const handleStatusToggle = (index) => {
    setReservationStatus((prevStatus) => {
      const newStatus = [...prevStatus]
      newStatus[index] = !newStatus[index]
      return newStatus
    })
  }

  return (
    <Container maxWidth="md">
      <Grid>
        <Grid md={12}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h5" fontWeight="fontWeightBold">
                  지난 예약
                </Typography>
              }
            />

            <CardContent>
              {pastReservations.length === 0 ? (
                <Typography variant="body1">
                  현재 예약이 없습니다. <SentimentDissatisfiedIcon />
                </Typography>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ whiteSpace: 'nowrap' }}>
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          체크인 날짜
                        </Typography>
                      </TableCell>
                      <TableCell style={{ whiteSpace: 'nowrap' }}>
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          체크아웃 날짜
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          예약 상태
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          인원
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          취소/가능
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle1"
                          fontWeight="fontWeightBold"
                        >
                          예약 정보
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {pastReservations.map((reservation, index) => (
                      <TableRow key={reservation._id}>
                        <TableCell>
                          {new Date(
                            reservation.checkInDate,
                          ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {new Date(
                            reservation.checkOutDate,
                          ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={
                              reservationStatus[index]
                                ? '예약 취소'
                                : '예약 가능'
                            }
                            color={
                              reservationStatus[index] ? 'error' : 'primary'
                            }
                          />
                        </TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap' }}>
                          어른{' '}
                          <Typography
                            variant="body1"
                            fontWeight="fontWeightBold"
                            component="span"
                          >
                            {reservation.adults}
                          </Typography>{' '}
                          아이{' '}
                          <Typography
                            variant="body1"
                            fontWeight="fontWeightBold"
                            component="span"
                          >
                            {reservation.children}
                          </Typography>
                        </TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap' }}>
                          <Button
                            variant="contained"
                            color={
                              reservationStatus[index] ? 'primary' : 'error'
                            }
                            onClick={() => handleStatusToggle(index)}
                          >
                            {reservationStatus[index]
                              ? '예약 가능'
                              : '예약 취소'}
                          </Button>
                        </TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap' }}>
                          <Link to={`/reservations/${reservation._id}`}>
                            <Button variant="contained" color="primary">
                              상세보기
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LastReservations
