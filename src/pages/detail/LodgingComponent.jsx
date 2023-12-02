import React, { useState, useEffect } from 'react'
import {
  Typography,
  Grid,
  Box,
  Chip,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import RoomComponent from './RoomComponent'
import LeftArrowIcon from '../../assets/svg/LeftArrowIcon.svg'
import RightArrowIcon from '../../assets/svg/RightArrowIcon.svg'

<<<<<<< HEAD
// import Hostinfo from './host/HostInfo'

function LodgingComponent({
  lodgingData,
  setSelectedRoom,
  setSelectedRoomType,
}) {
  const [activeIndex, setActiveIndex] = useState(0)

=======
function LodgingComponent({
  lodgingData,
  setSelectedRoom,
  setSelectedRoomType,
}) {
  const [activeIndex, setActiveIndex] = useState(0)

>>>>>>> f22db43a4a95e6ffe4ba37a03d54e551780e3226
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % lodgingData.lodging.image.length,
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [lodgingData.lodging.image.length])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? lodgingData.lodging.image.length - 1 : prevIndex - 1,
    )
  }

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === lodgingData.lodging.image.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const colorPalette = ['#6495ED', '#6A5ACD', '#6B8E23', '#C0C0C0', '#BDB76B'] // 색상 팔레트

  return (
    <Box className="mt-8 container mx-auto px-4">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-2">
        {lodgingData.lodging.name}
      </h1>
      <h2 className="text-2xl text-gray-600 mb-2">
        {lodgingData.lodging.theme} - {lodgingData.lodging.types}
      </h2>
      <Typography className="text-lg text-gray-500 mb-4">
        {`${lodgingData.lodging.address}`}
      </Typography>
      <Box className="mb-4">
        {lodgingData.lodging.option.map((item, index) => (
          <Chip
            key={index}
            label={item.details}
            className="mr-2 mb-2"
            style={{
              backgroundColor: colorPalette[index % colorPalette.length],
              color: 'white',
            }}
          />
        ))}
      </Box>

      <Box className="relative w-full mb-8" data-carousel="slide">
        {/* Carousel wrapper */}
        <Box
          className="relative h-56 overflow-hidden rounded-lg md:h-96"
          style={{ borderRadius: 10 }}
        >
          {lodgingData.lodging.image.map((imgSrc, index) => (
            <Box
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
            </Box>
          ))}
        </Box>
        {/* Slider indicators */}
        <Box className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {lodgingData.lodging.image.map((_, index) => (
            <Link
              key={index}
              type="Link"
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-blue-500' : 'bg-white'
              }`}
              aria-current={index === activeIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></Link>
          ))}
        </Box>

        {/* <!-- Slider controls --> */}
        <Link
          type="Link"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <Box className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <img src={LeftArrowIcon} alt="LeftArrowIcon" />

            <Box className="sr-only">Previous</Box>
          </Box>
        </Link>
        <Link
          type="Link"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <Box className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <img src={RightArrowIcon} alt="RightArrowIcon" />

            <Box className="sr-only">Next</Box>
          </Box>
        </Link>
      </Box>

      <Typography variant="body1" paragraph>
        {lodgingData.lodging.description}
      </Typography>
      <Link
        variant="outlined"
        color="primary"
        onClick={handleOpenModal}
        underline="always"
      >
        더보기
      </Link>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          <Box className="font-bold text-xl mb-2">숙소 설명</Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {lodgingData.lodging.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Link onClick={handleCloseModal} color="primary">
            닫기
          </Link>
        </DialogActions>
      </Dialog>
<<<<<<< HEAD
      {/* <Hostinfo /> */}
=======
>>>>>>> f22db43a4a95e6ffe4ba37a03d54e551780e3226
      <Grid container spacing={2}>
        {lodgingData.roomType.map((roomType, index) => (
          <Grid item xs={12} sm={6} md={4} key={roomType._id}>
            <RoomComponent
              roomType={roomType}
              room={lodgingData.lodging.rooms[index]}
              setSelectedRoom={setSelectedRoom}
              setSelectedRoomType={setSelectedRoomType}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default LodgingComponent
