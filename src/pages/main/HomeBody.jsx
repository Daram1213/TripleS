/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import PriceCheckIcon from '@mui/icons-material/PriceCheck'
import KingBedIcon from '@mui/icons-material/KingBed'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import StarIcon from '@mui/icons-material/Star'
import dummyData from '../../assets/dummyData/dummyData'

const { recommendHotel } = dummyData

function HomeBody() {
  const [selectedLocale, setSelectedLocale] = useState('')
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
                      variant="outlined"
                      onClick={() => handleLocaleChange(locale)}
                    >
                      {locale}
                    </Button>
                  ))}
                </Stack>
              </Box>
              <Box className="hot-container mt-4">
                <Box className="hot-list flex">
                  {filteredHotels.map((hotel) => (
                    <Box key={hotel.hotelId} className="hot-hotel-item w-1/4">
                      <img
                        className="hot-hotel-img"
                        src={hotel.images[0]?.imagePath}
                        alt={`Hotel ${hotel.hotelId}`}
                      />
                      <Box className="hot-hotel-content">
                        <Box className="hot-hotel-content-label">
                          <Typography className="hot-hotel-name">
                            {hotel.hotelName}
                          </Typography>
                          <Box className="hot-hotel-grade">
                            {[...Array(hotel.star)].map((_, i) => (
                              <StarIcon key={i} className="text-yellow-300" />
                            ))}
                          </Box>
                        </Box>
                        <Box className="hot-hotel-content-review">
                          <Box className="hot-hotel-content-score">
                            <Typography>{hotel.grade}</Typography>
                            <Typography>/</Typography>
                            <Typography>5</Typography>
                          </Box>
                          <Box className="hotel-comments">
                            이용자 리뷰 {hotel.reviewCount}개
                          </Box>
                        </Box>
                        <Box className="hot-hotel-content-tag">
                          {hotel.freeCancel && (
                            <Typography className="tag-txt">
                              무료 취소
                            </Typography>
                          )}
                        </Box>
                        <Box className="hot-hotel-content-price">
                          <Typography className="price-from">최저가</Typography>
                          <Typography className="price-content">
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
    </Box>
  )
}

export default HomeBody
