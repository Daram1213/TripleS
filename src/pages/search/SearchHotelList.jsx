import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Typography } from '@mui/material'
import fetchSearchHotel from '../../fetch/fetchSearchHotel.jsx'
import useIntersect from '../../components/search/useIntersect'
import HotelItem from '../../components/search/HotelItem'
import SideBar from '../../components/search/SideBar'

function SearchHotelList() {
  useEffect(
    () => () => {
      setHotels([])
    },
    [],
  )
  const [page, setPage] = useState(1)
  const items = 10
  const [hotels, setHotels] = useState([])
  const { keyword } = useParams()

  const hotelRes = useQuery({
    queryKey: ['hotels', keyword, items, page],
    queryFn: fetchSearchHotel,
  })

  const hotelData = hotelRes?.data?.lodging
  useEffect(() => {
    if (!hotelRes.isLoading && hotelData && hotelData.length > 0) {
      setHotels((prevHotels) => [...prevHotels, ...hotelData])
    }
  }, [hotelData, hotelRes.isLoading])

  const [intersectRef] = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!hotelRes.isLoading && hotelData.length === items)
        setPage((prevPage) => prevPage + 1)
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <Box className="flex justify-center w-full" style={{ width: '100%' }}>
      <Box className="max-w-[calc(100vw - 64px)] flex w-[1350px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
        <SideBar keyword={keyword} />
        <Box className="tour-container flex-auto px-4">
          <Typography
            className="text-gray-900 my-5"
            style={{
              display: 'inline',
              fontWeight: 600,
              fontSize: '1.5rem',
            }}
            variant="body1"
            component="span"
          >
            호텔
          </Typography>
          <Box className="grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            {hotels.length ? (
              hotels.map((hotel) => (
                <HotelItem key={hotel.lodgingId} hotel={hotel} />
              ))
            ) : (
              <Typography
                className="text-gray-900"
                style={{
                  display: 'inline',
                  fontWeight: 600,
                  fontSize: '1.5rem',
                }}
                variant="body1"
                component="span"
              >
                호텔 정보가 없습니다
              </Typography>
            )}
          </Box>
          {hotelRes.isLoading && <Box>Loading...</Box>}
          <Box
            ref={intersectRef}
            style={{ height: '20px', background: 'transparent' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SearchHotelList
