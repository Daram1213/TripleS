import React, { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router-dom'
import fetchReservation from '../../fetch/fetchReservation'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import RoomIcon from '@mui/icons-material/Room'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import PersonIcon from '@mui/icons-material/Person'
import PeopleIcon from '@mui/icons-material/People'
import EventIcon from '@mui/icons-material/Event'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '8px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    backgroundColor: '#f0f0f0',
    margin: '16px',
  },
  leftPane: {
    gridArea: '1 / 1 / span 1 / span 1',
    marginBottom: theme.spacing(2),
  },
  rightPane: {
    gridArea: '1 / 2 / span 1 / span 1',
    marginBottom: theme.spacing(2),
  },
  transparentCard: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginBottom: theme.spacing(2),
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(2),
    marginTop: 0,
    padding: theme.spacing(2),
  },
  table: {
    '& tbody tr:nth-child(odd)': {
      backgroundColor: '#f9f9f9',
    },
  },
  header: {
    fontSize: '2rem',
    margin: 0,
    fontWeight: 'bold',
  },
  content: {
    padding: theme.spacing(0),
  },
  pageContainer: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const ReservationDetails = () => {
  const classes = useStyles()

  const [isLoading, setIsLoading] = useState(true)
  const [reservation, setReservation] = useState([])
  const { reservationId } = useParams()

  useEffect(() => {
    const getReservation = async () => {
      try {
        const data = await fetchReservation()
        const details = data.find(
          (reservation) => reservation._id === reservationId,
        )
        setReservation(details)
        setIsLoading(false)
      } catch (error) {
        console.log('데이터 불러오는 중 오류 발생')
      }
    }

    getReservation()
  }, [reservationId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!reservation) {
    return <div>예약 정보가 없습니다</div>
  }

  const displayNames = {
    _id: '예약 ID',
    adults: '성인',
    checkInDate: '체크인',
    checkOutDate: '체크아웃',
    children: '아이',
    request: '요청사항',
    status: '예약 상태',
    roomBookingId: '객실 예약 ID',
    room: '객실',
    deletedAt: '삭제 날짜',
    createdAt: '예약 생성 날짜',
    updatedAt: '예약 수정 날짜',
  }

  return (
    <div className={classes.pageContainer}>
      <div className={classes.container}>
        <div className={classes.leftPane}>
          <Card className={`${classes.root} ${classes.card}`}>
            <CardContent className={classes.content}>
              <Typography
                variant="h2"
                component="div"
                className={`${classes.header} font-bold`}
                style={{ fontSize: '2rem', fontWeight: 'bold' }}
              >
                예약 정보
              </Typography>

              <Table className={`${classes.table}`}>
                <TableBody>
                  {Object.entries(reservation).map(([key, value]) =>
                    !['checkInDate', 'checkOutDate', 'request'].includes(key) &&
                    !key.endsWith('_v') ? (
                      <TableRow key={key}>
                        <TableCell>
                          <strong>{displayNames[key] || key}</strong>
                        </TableCell>
                        <TableCell>
                          {key === 'checkInDate' && <AccessTimeIcon />}{' '}
                          {key === 'room' && <RoomIcon />}{' '}
                          {key === 'request' && <RequestQuoteIcon />}{' '}
                          {key === 'adults' && <PersonIcon />}{' '}
                          {key === 'children' && <PeopleIcon />}{' '}
                          {['createdAt', 'updatedAt', 'deletedAt'].includes(
                            key,
                          ) && <EventIcon />}{' '}
                          {JSON.stringify(value).replace(/"/g, '')}
                        </TableCell>
                      </TableRow>
                    ) : null,
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Pane */}
        <div className={classes.rightPane}>
          <Card className={`${classes.root} ${classes.card}`}>
            <CardContent className={classes.content}>
              <Typography
                variant="h2"
                component="div"
                className={`${classes.header} font-bold`}
                style={{ fontSize: '2rem', fontWeight: 'bold' }}
              >
                상세 정보
              </Typography>

              <Table className={`${classes.table}`}>
                <TableBody>
                  {['checkInDate', 'checkOutDate', 'request'].map((key) => (
                    <TableRow key={key}>
                      <TableCell>
                        <strong>{displayNames[key] || key}</strong>
                      </TableCell>
                      <TableCell>
                        {key === 'checkInDate' && <AccessTimeIcon />}{' '}
                        {key === 'checkOutDate' && <AccessTimeIcon />}{' '}
                        {key === 'room' && <RoomIcon />}{' '}
                        {key === 'request' && <RequestQuoteIcon />}{' '}
                        {JSON.stringify(reservation[key]).replace(/"/g, '')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ReservationDetails
