import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from '@material-tailwind/react'
import { makeStyles } from '@mui/styles'
import MuiChip from '@mui/material/Chip' // Material-UI의 Chip 컴포넌트를 가져옵니다.

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
  },
  available: {
    backgroundColor: 'green',
    color: 'white',
  },
  canceled: {
    backgroundColor: 'red',
    color: 'white',
  },
}))

export default function PastReservations({ reservations }) {
  const classes = useStyles()

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  console.log(reservations)

  return (
    <>
      {reservations.map((reservation) => (
        <Card key={reservation._id} className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {reservation._id}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              체크인
            </Typography>
            <Typography>{formatDate(reservation.checkInDate)}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              체크아웃
            </Typography>
            <Typography>{formatDate(reservation.checkOutDate)}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              어른
            </Typography>
            <Typography>{reservation.adults}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              아이
            </Typography>
            <Typography>{reservation.children}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <MuiChip
              label={reservation.status ? '예약 가능' : '예약 불가능'}
              variant="outlined"
              className={`${classes.chip} ${
                reservation.status ? classes.available : classes.canceled
              }`}
            />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}
