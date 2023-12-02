import React, { useState } from 'react'
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
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import UpcomingTrips from './UpcomingTrips'
import PastTrips from './PastTrips'
import CancelledTrips from './CancelledTrips'

export default function ReservationPage() {
  const [selectedComponent, setSelectedComponent] = useState(null)

  const reservation = {
    year: 2023,
    startDate: '2023-12-10',
    location: '예약 장소',
    detailsLink: '예약 상세 정보 링크',
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'upcoming':
        return <UpcomingTrips reservation={reservation} />
      case 'past':
        return <PastTrips reservation={reservation} />
      case 'cancel':
        return <CancelledTrips reservation={reservation} />
      default:
        return null
    }
  }

  return (
    <div className="flex">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            내 여행
          </Typography>
        </div>
        <List>
          <ListItem onClick={() => setSelectedComponent('upcoming')}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            예정된 여행
          </ListItem>
          <ListItem onClick={() => setSelectedComponent('past')}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            지난 여행
          </ListItem>
          <ListItem onClick={() => setSelectedComponent('cancel')}>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            취소된 여행
          </ListItem>
        </List>
      </Card>
      <div className="flex-1 p-4">{renderComponent()}</div>
    </div>
  )
}
