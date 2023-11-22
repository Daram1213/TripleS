import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/material'
import fetchHotel from '../../fetch/search/fetchHotel'
import useIntersect from '../../components/search/useIntersect'
import HotelItem from '../../components/search/HotelItem'
import SideBar from '../../components/search/SideBar'

function HotelList() {
  const [page, setPage] = useState(1)
  const [hotelLists, setHotelLists] = useState([])

  // useParams로 검색 정보 가져오기 -> useQuery에 검색어, page 전달
  const { search } = useParams()

  const results = useQuery(['hotels', search, page], fetchHotel)
  const hotels = results.data

  useEffect(() => {
    if (!results.isLoading && hotels) {
      setHotelLists((prevItems) => [...prevItems, ...hotels])
    }
  }, [hotels, results.isLoading])

  const [intersectRef] = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target)
      if (!results.isLoading) setPage((prevPage) => prevPage + 1)
      observer.observe(entry.target)
    },
    { threshold: 0.5 },
  )

  return (
    <Box className="container flex justify-center">
      <Box className="max-w-[calc(100vw - 64px)] flex w-[1350px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
        {/* sidebar에 useParams로 가져온 search를 props로 전달 */}
        <SideBar search={search}/>
        <Box className="flex flex-auto flex-col px-4">
          <Box className="content-container hotel-container flex-auto px-4">
            <Box className="my-5">
              <h2 className="text-2xl font-bold text-gray-900">호텔</h2>
            </Box>
            <Box className="grid w-full max-w-6xl  sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {!hotelLists.length ? (
                <h1>호텔 정보가 없습니다.</h1>
              ) : (
                hotelLists.map((hotel) => (
                  <HotelItem key={hotel.id} hotel={hotel} />
                ))
              )}
            </Box>
            {results.isLoading && <Box>Loading...</Box>}
            <Box
              ref={intersectRef}
              style={{ height: '20px', background: 'transparent' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default HotelList
