<<<<<<< HEAD
import { useParams, Link } from 'react-router-dom'
=======
import React, { useParams } from 'react'
import { Link } from 'react-router-dom'
>>>>>>> 4c37ac8 (feat: create search main page, card UI, sidebar)
import { useQuery } from '@tanstack/react-query'
import { Box, Typography } from '@mui/material'
import SideBar from './SideBar'
import HotelItem from './HotelItem'
import TourItem from './TourItem'
<<<<<<< HEAD
// import fetchHotel from '../../fetch/search/fetchHotel'
// import fetchTour from '../../fetch/search/fetchTour'
=======
import fetchHotel from '../../fetch/search/fetchHotel'
import fetchTour from '../../fetch/search/fetchTour'
>>>>>>> 4c37ac8 (feat: create search main page, card UI, sidebar)

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
<<<<<<< HEAD
  {
    id: '1',
    name: '롯데월드',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '2',
    name: '에버랜드',
    city: '용인',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '3',
    name: '에버랜드',
    city: '용인',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '4',
    name: '에버랜드',
    city: '용인',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
  {
    id: '5',
    name: '롯데월드',
    city: '서울',
    country: '대한민국',
    rating: '4.2',
    reviewCount: '100',
  },
=======
  { id: '1', country: '대한민국', city: '서울', district: '종로구' },
  { id: '2', country: '대한민국', city: '서울', district: '강남구' },
  { id: '3', country: '대한민국', city: '서울', district: '중랑구' },
  { id: '4', country: '대한민국', city: '서울', district: '노원구' },
>>>>>>> 4c37ac8 (feat: create search main page, card UI, sidebar)
]

function SearchCard() {
  // 검색어 useParams로 가져오기 e.g. 서울, 종로, 일본
<<<<<<< HEAD
  const { keyword } = useParams()

  // useQuery로 데이터 fetch comments는 테스트용
  // 종합 결과 페이지에서는 페이지 데이터 x로 1페이지만 불러옴
  // const hotelList = useQuery(['hotels', keyword], fetchHotel)
  // const tourList = useQuery(['tours', keyword], fetchTour)

  return (
    <Box className="flex justify-center w-full" style={{ width: '100%' }}>
      <Box className="max-w-[calc(100vw - 64px)] flex w-[1350px] overflow-x-auto sm:flex-col md:flex-col lg:flex-row">
        <SideBar keyword={keyword} />
        <Box className="flex flex-auto flex-col px-4">
          <Box className="flex-auto px-4">
            <Box className="my-5">
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
                호텔
              </Typography>
            </Box>
            <Box className="grid w-full max-w-6xl  sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 xl:grid-cols-3">
              {hotels.length ? (
                hotels.map((hotel) => (
                  <HotelItem key={hotel.id} hotel={hotel} />
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
            <Box className="flex items-end justify-end">
              <Link to={`/hotelSearchList/${keyword}`}>
                <Typography variant="body1" className="text-lg text-gray-500">
                  더보기
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box className="tour-container flex-auto px-4">
            <Box className="my-5">
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
                여행지
              </Typography>
            </Box>
            <Box className="grid w-full max-w-6xl sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {tours.length ? (
                tours.map((tour) => <TourItem key={tour.id} tour={tour} />)
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
                  여행지 정보가 없습니다
                </Typography>
              )}
            </Box>
            <Box className="flex items-end justify-end">
              <Link to={`/tourSearchList/${keyword}`}>
                <Typography variant="body1" className="text-lg text-gray-500">
                  더보기
                </Typography>
              </Link>
            </Box>
=======
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
>>>>>>> 4c37ac8 (feat: create search main page, card UI, sidebar)
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchCard
