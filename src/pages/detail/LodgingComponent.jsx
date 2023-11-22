import React, { useState, useEffect } from 'react'
import { Typography, Grid } from '@mui/material'
import RoomComponent from './RoomComponent'
import LeftArrowIcon from '../../assets/svg/LeftArrowIcon'
import RightArrowIcon from '../../assets/svg/RightArrowIcon'

const LodgingComponent = ({ lodging }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % lodging.image.length)
    }, 3000) // 3초마다 슬라이드 변경

    return () => clearInterval(interval)
  }, [lodging.image.length])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lodging.image.length - 1 : prevIndex - 1,
    )
  }

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === lodging.image.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="mt-8 container mx-auto px-4">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-2">
        {lodging.name}
      </h1>
      <h2 className="text-2xl text-gray-600 mb-2">
        {lodging.theme} - {lodging.types.join(', ')}
      </h2>
      <p className="text-lg text-gray-500 mb-4">{lodging.address}</p>

      <div className="relative w-full mb-8" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {lodging.image.map((imgSrc, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
              data-carousel-item
            >
              <img
                src={imgSrc}
                className="w-full h-full object-cover"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {lodging.image.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-blue-500' : 'bg-white'
              }`}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <LeftArrowIcon />

            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <RightArrowIcon />

            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <Typography variant="body1" paragraph>
        {lodging.description}
      </Typography>
      <Grid container spacing={2}>
        {lodging.rooms.map((room, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <RoomComponent room={room} />
          </Grid>
        ))}
      </Grid>
      {/* <MapComponent latitude={lodging.map.latitude} longitude={lodging.map.longitude} /> */}
      {/* <OptionComponent options={lodging.option} /> */}
      {/* 리뷰 섹션 구현 */}
    </div>
  )
}

export default LodgingComponent
