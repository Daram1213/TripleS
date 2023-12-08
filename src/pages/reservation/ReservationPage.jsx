import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import EventBusyIcon from '@mui/icons-material/EventBusy'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import fetchReservation from '../../fetch/fetchReservation'
import LastReservations from './LastReservations'
import CurrentReservations from './CurrentReservations'
import FutureReservations from './FutureReservations'

// Add imports for the Tailwind CSS components
import {
  Card,
  Typography as TWTypography,
  List as TWList,
} from '@material-tailwind/react'

const drawerWidth = 240

export default function ReservationPage() {
  const [selectedContent, setSelectedContent] = React.useState('지난 예약')

  const [pastReservations, setPastReservations] = useState([])
  const [currentReservations, setCurrentReservations] = useState([])
  const [futureReservations, setFutureReservations] = useState([])

  const handleListItemClick = (text) => {
    setSelectedContent(text)
  }

  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const getReservation = async () => {
      try {
        const data = await fetchReservation()
        setReservations(data)
      } catch (error) {
        console.log('데이터 불러오는 중 오류 발생')
      }
    }

    getReservation()
  }, [])

  useEffect(() => {
    const today = new Date()

    const pastReservations = reservations.filter((reservation) => {
      const checkoutDate = new Date(reservation.checkOutDate)
      return checkoutDate < today
    })

    const currentReservations = reservations.filter((reservation) => {
      const checkinDate = new Date(reservation.checkInDate)
      const checkoutDate = new Date(reservation.checkOutDate)
      return checkinDate <= today && today <= checkoutDate
    })

    const futureReservations = reservations.filter((reservation) => {
      const checkinDate = new Date(reservation.checkInDate)
      return today < checkinDate
    })

    setPastReservations(pastReservations)
    setCurrentReservations(currentReservations)
    setFutureReservations(futureReservations)
  }, [reservations])

  return (
    <div className="flex">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <TWTypography variant="h5" color="blue-gray">
            나의 예약
          </TWTypography>
        </div>
        <TWList>
          <ListItem
            disablePadding
            onClick={() => handleListItemClick('지난 예약')}
          >
            <ListItemButton>
              <ListItemIcon>
                <EventBusyIcon />
              </ListItemIcon>
              <ListItemText primary="지난 예약" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => handleListItemClick('현재 예약')}
          >
            <ListItemButton>
              <ListItemIcon>
                <AccessTimeFilledIcon />
              </ListItemIcon>
              <ListItemText primary="현재 예약" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => handleListItemClick('예정된 예약')}
          >
            <ListItemButton>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary="예정된 예약" />
            </ListItemButton>
          </ListItem>
        </TWList>
      </Card>

      <div className="flex-grow p-4 bg-gray-100">
        {selectedContent === '지난 예약' && (
          <LastReservations pastReservations={pastReservations} />
        )}
        {selectedContent === '현재 예약' && (
          <CurrentReservations currentReservations={currentReservations} />
        )}
        {selectedContent === '예정된 예약' && (
          <FutureReservations futureReservations={futureReservations} />
        )}
      </div>
    </div>
  )
}
