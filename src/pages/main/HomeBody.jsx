/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import PriceCheckIcon from '@mui/icons-material/PriceCheck'
import KingBedIcon from '@mui/icons-material/KingBed'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import dummyData from '../../assets/dummyData/dummyData'

const { recommendHotel } = dummyData

function HomeBody() {
  const [selectedLocale, setSelectedLocale] = useState('서울')
  const filteredHotels = recommendHotel.filter(
    (hotel) =>
      hotel.categoryName === 'hotel' && hotel.locale === selectedLocale,
  )
  const localesArray = Array.from(
    new Set(recommendHotel.map((hotel) => hotel.locale)),
  )

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale)
  }

  return (
    <Box className="home-body-container w-full m-0 bg-white inline-block min-h-max relative pt-20 rounded-t-lg ">
      <Box className="scroll-category-wrapper box-border w-full m-0 p-0 overflow-visible">
        <Box className="recommend-modules-wrapper relative m-auto mb-10 w-[1160px]">
          <Box className="recommend-modules p-8 rounded-md overflow-hidden bg-red-50">
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#0f294d',
                lineHeight: '34px',
                textAlign: 'left',
              }}
            >
              인기 호텔 및 숙소
            </Typography>
            <Box className="recommend-module-warranty mt-4 flex relative text-center">
              <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
                <PriceCheckIcon className="mr-0.5 text-blue-800" />
                <Typography
                  sx={{
                    borderBottom: 'dotted 1px darkgray',
                    fontSize: '14px',
                    lineHeight: '1.75',
                  }}
                >
                  트립닷컴 가격 보장제
                </Typography>
              </Box>
              <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
                <BookOnlineIcon className="mr-0.5 text-blue-800" />
                <Typography
                  sx={{
                    borderBottom: 'dotted 1px darkgray',
                    fontSize: '14px',
                    lineHeight: '1.75',
                  }}
                >
                  호텔 예약 보장제
                </Typography>
              </Box>
              <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
                <KingBedIcon className="mr-0.5 text-blue-800" />
                <Typography
                  sx={{
                    borderBottom: 'dotted 1px darkgray',
                    fontSize: '14px',
                    lineHeight: '1.75',
                  }}
                >
                  호텔 숙박 보장제
                </Typography>
              </Box>
            </Box>
            <Box className="recommend-module-things">
              <Box className="recommend-tap-container mt-4">
                <Stack spacing={2} direction="row">
                  {localesArray.map((locale) => (
                    <Button
                      key={locale}
                      variant={
                        selectedLocale === locale ? 'contained' : 'outlined'
                      }
                      onClick={() => handleLocaleChange(locale)}
                    >
                      {locale}
                    </Button>
                  ))}
                </Stack>
              </Box>
              <Box className="hot-container mt-4 relative text-center">
                <Box className="hot-list flex">
                  {filteredHotels.map((hotel) => (
                    <Box
                      key={hotel.hotelId}
                      className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden h-full flex flex-col cursor-pointer bg-slate-50"
                    >
                      <Box className="rounded-md overflow-hidden">
                        <img
                          className="hot-hotel-img hover:scale-110 hover:transition"
                          src={hotel.images[0]?.imagePath}
                          alt={`Hotel ${hotel.hotelId}`}
                        />
                      </Box>

                      <Box className="hot-hotel-content flex-1 p-4 flex flex-col">
                        <Box className="hot-hotel-content-label w-full box-border">
                          <Typography className="hot-hotel-name overflow-hidden mr-1 font-bold text-base text-left">
                            {hotel.hotelName}
                            <Box className="hot-hotel-grade ml-1 pb-0.5 align-middle inline-block box-content">
                              {[...Array(hotel.star)].map((_, i) => (
                                <StarRateRoundedIcon
                                  key={i}
                                  className="text-yellow-400 ml-[-5px]"
                                />
                              ))}
                            </Box>
                          </Typography>
                        </Box>
                        <Box className="hot-hotel-content-review align-middle my-2 text-left">
                          <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 inline-block">
                            <Typography className="leading-4 flex">
                              {hotel.grade}
                              <Typography
                                style={{
                                  fontSize: '0.9rem',
                                  opacity: '50%',
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  alignContent: 'flex-end',
                                }}
                              >
                                /5
                              </Typography>
                            </Typography>
                          </Box>
                          <Typography
                            style={{
                              display: 'inline-block',
                              color: '#00429b',
                              fontWeight: '600',
                              marginLeft: '0.5rem',
                            }}
                          >
                            이용자 리뷰 {hotel.reviewCount}개
                          </Typography>
                        </Box>
                        <Box className="hot-hotel-content-tag">
                          {hotel.freeCancel && (
                            <Typography
                              style={{ fontSize: '0.8rem' }}
                              className="tag-txt text-left"
                            >
                              무료 취소
                            </Typography>
                          )}
                        </Box>
                        <Box className="hot-hotel-content-price text-right">
                          <Typography
                            style={{
                              color: '#8592a6',
                              verticalAlign: 'middle',
                            }}
                            className="price-from inline-block"
                          >
                            최저가
                          </Typography>
                          <Typography
                            style={{
                              color: '#of294d',
                              fontSize: '1.2rem',
                              fontWeight: '700',
                              marginLeft: '0.25rem',
                            }}
                            className="price-content inline-block"
                          >
                            {hotel.salePrice.toLocaleString()}원
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="scroll-category-wrapper box-border w-full m-0 p-0 overflow-visible">
        <Box className="recommend-modules-wrapper relative m-auto mb-10 w-[1160px]">
          <Box className="recommend-modules p-8 rounded-md overflow-hidden bg-red-50">
            <Typography
              sx={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#0f294d',
                lineHeight: '34px',
                textAlign: 'left',
              }}
            >
              인기 호텔 및 숙소
            </Typography>
            <Box className="recommend-module-warranty mt-4 flex relative text-center">
              <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
                <PriceCheckIcon className="mr-0.5 text-blue-800" />
                <Typography
                  sx={{
                    borderBottom: 'dotted 1px darkgray',
                    fontSize: '14px',
                    lineHeight: '1.75',
                  }}
                >
                  트립닷컴 가격 보장제
                </Typography>
              </Box>
              <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
                <BookOnlineIcon className="mr-0.5 text-blue-800" />
                <Typography
                  sx={{
                    borderBottom: 'dotted 1px darkgray',
                    fontSize: '14px',
                    lineHeight: '1.75',
                  }}
                >
                  호텔 예약 보장제
                </Typography>
              </Box>
              <Box className="recommend-module-warranty-item leading-5 mr-4 flex ">
                <KingBedIcon className="mr-0.5 text-blue-800" />
                <Typography
                  sx={{
                    borderBottom: 'dotted 1px darkgray',
                    fontSize: '14px',
                    lineHeight: '1.75',
                  }}
                >
                  호텔 숙박 보장제
                </Typography>
              </Box>
            </Box>
            <Box className="recommend-module-things">
              <Box className="recommend-tap-container mt-4">
                <Stack spacing={2} direction="row">
                  {localesArray.map((locale) => (
                    <Button
                      key={locale}
                      variant={
                        selectedLocale === locale ? 'contained' : 'outlined'
                      }
                      onClick={() => handleLocaleChange(locale)}
                    >
                      {locale}
                    </Button>
                  ))}
                </Stack>
              </Box>
              <Box className="hot-container mt-4 relative text-center">
                <Box className="hot-list flex">
                  {filteredHotels.map((hotel) => (
                    <Box
                      key={hotel.hotelId}
                      className="hot-hotel-item mr-4 box-content w-[calc(25%-12px)] rounded-md shadow-md overflow-hidden h-full flex flex-col cursor-pointer bg-slate-50"
                    >
                      <Box className="rounded-md overflow-hidden">
                        <img
                          className="hot-hotel-img hover:scale-110 hover:transition"
                          src={hotel.images[0]?.imagePath}
                          alt={`Hotel ${hotel.hotelId}`}
                        />
                      </Box>

                      <Box className="hot-hotel-content flex-1 p-4 flex flex-col">
                        <Box className="hot-hotel-content-label w-full box-border">
                          <Typography className="hot-hotel-name overflow-hidden mr-1 font-bold text-base text-left">
                            {hotel.locale}
                          </Typography>
                        </Box>
                        <Box className="hot-hotel-content-review align-middle my-2 text-left">
                          <Box className="hot-hotel-content-score bg-blue-800 rounded-xl rounded-tr-none text-white py-0.5 px-1.5 inline-block">
                            <Typography className="leading-4 flex">
                              {hotel.grade}
                              <Typography
                                style={{
                                  fontSize: '0.9rem',
                                  opacity: '50%',
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  alignContent: 'flex-end',
                                }}
                              >
                                /5
                              </Typography>
                            </Typography>
                          </Box>
                          <Typography
                            style={{
                              display: 'inline-block',
                              color: '#00429b',
                              fontWeight: '600',
                              marginLeft: '0.5rem',
                            }}
                          >
                            리뷰 {hotel.reviewCount}개
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeBody
