<<<<<<< refs/remotes/origin/main
<<<<<<< refs/remotes/origin/main
<<<<<<<
import { Link } from 'react-router-dom'
=======
>>>>>>> feat: create search main page, card UI, sidebar
=======
import { Link } from 'react-router-dom'
>>>>>>> chore: add Link to hotelDetail page to each hotelItem components
import { Box, Typography } from '@mui/material'

function HotelItem({ hotel }) {
  return (
<<<<<<< refs/remotes/origin/main
<<<<<<< refs/remotes/origin/main
    // 클릭시 숙소 디테일 페이지로 이동
    <Link>
<<<<<<< refs/remotes/origin/main
      <Box className="h-29 group relative mb-6 flex overflow-hidden border border-solid border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
        <Box className="h-[126px] w-[126px] overflow-hidden">
          <img
            src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
            className="h-[126px] w-[126px] object-cover duration-1000 group-hover:scale-125 "
            alt="Nature"
          />
        </Box>
        <Box className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500">
          <Typography
            variant="body1"
            className=" text-gray-900"
            style={{ fontWeight: 600 }}
          >
            {hotel.name}
          </Typography>
          <Typography variant="body1" className="-mt-1">
            {hotel.city} {hotel.country}
          </Typography>

          <Box className="-mt-1.5">
            <Typography
              variant="body1"
              className=" text-blue-500"
              style={{ display: 'inline' }}
            >
              {hotel.rating}
            </Typography>
            <Typography
              variant="body2"
              className=" text-gray-500"
              style={{ display: 'inline' }}
            >
              /5
            </Typography>
            <Typography
              variant="body1"
              className="ml-2"
              style={{ marginLeft: '8px', display: 'inline' }}
            >
              {hotel.reviewCount}건의 리뷰
            </Typography>
          </Box>
          <Box className="absolute bottom-1 right-3">
            <Typography variant="body2" style={{ display: 'inline' }}>
              최저가
            </Typography>
            <Typography
              className="pl-2 text-xl text-orange-600"
              style={{ display: 'inline', fontWeight: 600, fontSize: '1.3rem' }}
              variant="body1"
              component="span"
            >
              {hotel.price}원
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default HotelItem

=======
=======
import { Link } from 'react-router-dom'
>>>>>>> chore: add Link to hotelDetail page to each hotelItem components
import { Box, Typography } from '@mui/material'

function HotelItem({ hotel }) {
  return (
<<<<<<< refs/remotes/origin/main
    <Link to={`/hotel-detail/${hotel.id}`} key={hotel.id}>
=======
>>>>>>> fix: fix css, routing, feat: update sidebar style that clicked
      <Box className="h-29 group relative mb-6 flex overflow-hidden border border-solid border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
        <Box className="h-[126px] w-[126px] overflow-hidden">
          <img
            src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
            className="h-[126px] w-[126px] object-cover duration-1000 group-hover:scale-125 "
            alt="Nature"
          />
        </Box>
        <Box className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500">
          <Typography
            variant="body1"
            className=" text-gray-900"
            style={{ fontWeight: 600 }}
          >
            {hotel.name}
          </Typography>
          <Typography variant="body1" className="-mt-1">
            {hotel.city} {hotel.country}
          </Typography>

          <Box className="-mt-1.5">
            <Typography
              variant="body1"
              className=" text-blue-500"
              style={{ display: 'inline' }}
            >
              {hotel.rating}
            </Typography>
            <Typography
              variant="body2"
              className=" text-gray-500"
              style={{ display: 'inline' }}
            >
              /5
            </Typography>
            <Typography
              variant="body1"
              className="ml-2"
              style={{ marginLeft: '8px', display: 'inline' }}
            >
              {hotel.reviewCount}건의 리뷰
            </Typography>
          </Box>
          <Box className="absolute bottom-1 right-3">
            <Typography variant="body2" style={{ display: 'inline' }}>
              최저가
            </Typography>
            <Typography
              className="pl-2 text-xl text-orange-600"
              style={{ display: 'inline', fontWeight: 600, fontSize: '1.3rem' }}
              variant="body1"
              component="span"
            >
              {hotel.price}원
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
=======
    <Box className="h-29 group relative mb-6 flex overflow-hidden border border-solid border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
      <Box className="h-[116px] w-[116px] overflow-hidden">
        <img
          src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
          className="h-[116px] w-[116px] object-cover duration-1000 group-hover:scale-125 "
          alt="Nature"
        />
      </Box>
      <Box className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-base text-gray-500">
        <h2 className="font-bold text-gray-900">{hotel.name}</h2>
        <p className="-mt-1">
          {hotel.city} {hotel.country}
        </p>
=======
    <Link to={`/hotel-detail/${hotel.id}`} key={hotel.id}>
=======
    // 클릭시 숙소 디테일 페이지로 이동
    <Link>
>>>>>>> fix: fix css, routing, feat: update sidebar style that clicked
      <Box className="h-29 group relative mb-6 flex overflow-hidden border border-solid border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100">
        <Box className="h-[126px] w-[126px] overflow-hidden">
          <img
            src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
            className="h-[126px] w-[126px] object-cover duration-1000 group-hover:scale-125 "
            alt="Nature"
          />
        </Box>
        <Box className=" flex flex-col items-start justify-start gap-1 px-2 py-1.5 text-gray-500">
          <Typography
            variant="body1"
            className=" text-gray-900"
            style={{ fontWeight: 600 }}
          >
            {hotel.name}
          </Typography>
          <Typography variant="body1" className="-mt-1">
            {hotel.city} {hotel.country}
<<<<<<< refs/remotes/origin/main
          </p>
>>>>>>> chore: add Link to hotelDetail page to each hotelItem components
=======
          </Typography>
>>>>>>> fix: fix css, routing, feat: update sidebar style that clicked

          <Box className="-mt-1.5">
            <Typography
              variant="body1"
              className=" text-blue-500"
              style={{ display: 'inline' }}
            >
              {hotel.rating}
            </Typography>
            <Typography
              variant="body2"
              className=" text-gray-500"
              style={{ display: 'inline' }}
            >
              /5
            </Typography>
            <Typography
              variant="body1"
              className="ml-2"
              style={{ marginLeft: '8px', display: 'inline' }}
            >
              {hotel.reviewCount}건의 리뷰
            </Typography>
          </Box>
          <Box className="absolute bottom-1 right-3">
            <Typography variant="body2" style={{ display: 'inline' }}>
              최저가
            </Typography>
            <Typography
              className="pl-2 text-xl text-orange-600"
              style={{ display: 'inline', fontWeight: 600, fontSize: '1.3rem' }}
              variant="body1"
              component="span"
            >
              {hotel.price}원
            </Typography>
          </Box>
        </Box>
      </Box>
<<<<<<< refs/remotes/origin/main
    </Box>
>>>>>>> feat: create search main page, card UI, sidebar
=======
    </Link>
>>>>>>> chore: add Link to hotelDetail page to each hotelItem components
  )
}

export default HotelItem
<<<<<<< refs/remotes/origin/main

>>>>>>>
=======
>>>>>>> feat: create search main page, card UI, sidebar
