import React, { useEffect, useState } from 'react'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react'
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
} from '@heroicons/react/24/solid'

import PastReservations from './PastReservations'
import CurrentReservations from './CurrentReservations'
import ScheduledReservations from './ScheduledReservations'
import fetchReservation from '../../fetch/fetchReservation'

export default function ReservationPage() {
  const [selectedItem, setSelectedItem] = useState('past')
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReservation()
        setReservations(data)
        data
      } catch (error) {
        console.error('Error fetching reservations', error)
      }
    }

    fetchData() // Call the fetchData function
  }, [])

  const renderSelectedComponent = () => {
    const currentDate = new Date()

    // Filter reservations based on checkInDate and checkOutDate
    const pastReservations = reservations.filter((reservation) => {
      const checkInDate = new Date(reservation.checkInDate)
      const checkOutDate = new Date(reservation.checkOutDate)
      return checkOutDate < currentDate
    })

    const currentReservations = reservations.filter((reservation) => {
      const checkInDate = new Date(reservation.checkInDate)
      const checkOutDate = new Date(reservation.checkOutDate)
      return checkInDate <= currentDate && checkOutDate >= currentDate
    })

    const scheduledReservations = reservations.filter((reservation) => {
      const checkInDate = new Date(reservation.checkInDate)
      return checkInDate > currentDate
    })

    switch (selectedItem) {
      case 'past':
        return <PastReservations reservations={pastReservations} />
      case 'current':
        return <CurrentReservations reservations={currentReservations} />
      case 'scheduled':
        return <ScheduledReservations reservations={scheduledReservations} />
      default:
        return null
    }
  }

  return (
    <div className="flex">
      <Card className="h-[calc(100vh-2rem)] w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            예약 목록
          </Typography>
        </div>
        <List>
          <ListItem onClick={() => setSelectedItem('past')}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            지난 예약
          </ListItem>
          <ListItem onClick={() => setSelectedItem('current')}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            현재 예약
          </ListItem>
          <ListItem onClick={() => setSelectedItem('scheduled')}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            예정된 예약
          </ListItem>
        </List>
      </Card>

      <div className="flex-grow p-4">{renderSelectedComponent()}</div>
    </div>
  )
}
