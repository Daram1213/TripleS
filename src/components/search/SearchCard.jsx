import React, { useParams } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box, Typography } from '@mui/material'
import SideBar from './SideBar'
import HotelItem from './HotelItem'
import TourItem from './TourItem'
import fetchHotel from '../../fetch/search/fetchHotel'
import fetchTour from '../../fetch/search/fetchTour'

const hotels = [
  {
    id: '1',
    name: '그랜드워커힐',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '2',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '3',
    name: '그랜드워커힐',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '4',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '5',
    name: '그랜드워커힐',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '6',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
  {
    id: '7',
    name: '신라호텔',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
    price: '200,000',
  },
]

const tours = [
  { id: '1', country: '대한민국', city: '서울', district: '종로구' },
  { id: '2', country: '대한민국', city: '서울', district: '강남구' },
  { id: '3', country: '대한민국', city: '서울', district: '중랑구' },
  { id: '4', country: '대한민국', city: '서울', district: '노원구' },
]

function SearchCard() {
  // 검색어 useParams로 가져오기 e.g. 서울, 종로, 일본
  const { search } = useParams()

  // useQuery로 데이터 fetch comments는 테스트용
  // 종합 결과 페이지에서는 페이지 데이터 x로 1페이지만 불러옴
  // 현재 더미데이터 tours, hotels쓰고 있어 쓰지 않음.
  const hotelList = useQuery(['hotels', search], fetchHotel)
  const tourList = useQuery(['tours', search], fetchTour)

  return (
    // container
    <Box className="container flex justify-center">
      <Box className="max-w-[calc(100vw - 64px)] flex w-[1350px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
        {/* sidebar에 useParams로 가져온 search를 props로 전달 */}
        <SideBar search={search} />
        <Box className="flex flex-auto flex-col px-4">
          <Box className="content-container hotel-container flex-auto px-4">
            <Box className="my-5">
              <h2 className="text-2xl font-bold text-gray-900">호텔</h2>
            </Box>
            <Box className="grid w-full max-w-6xl  sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {!hotels.length ? (
                <h1>호텔 정보가 없습니다.</h1>
              ) : (
                hotels.map((hotel) => (
                  <HotelItem key={hotel.id} hotel={hotel} />
                ))
              )}
            </Box>
            <Link to={`/hotelList/${search}`}>
              <Box className="flex items-end justify-end">
                <Typography className="text-lg text-gray-500">
                  더보기
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box className="content-container tour-container flex-auto px-4">
            <Box className="my-5">
              <h2 className="text-2xl font-bold text-gray-900">여행지</h2>
            </Box>
            <Box className="grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {!tours.length ? (
                <h1>여행지 정보가 없습니다.</h1>
              ) : (
                tours.map((tourSpot) => (
                  <TourItem key={tourSpot.id} tourSpot={tourSpot} />
                ))
              )}
            </Box>
            <Link to={`/tourList/${search}`}>
              <Box className="flex items-end justify-end">
                <Typography className="text-lg text-gray-500">
                  더보기
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchCard
