import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

function TourPopupItem({ attraction }) {
  const city = useMemo(
    () => (attraction?.address ? attraction.address.split(' ')[0] : ''),
    [attraction],
  )

  return (
    // 클릭시 여행지 디테일 페이지로 이동
    <Link>
      <Box className="w-full">
        <img
          // src={`src/assets/img/attraction/${attraction.mainImage}`}
          src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
          className="w-full h-1/2 object-cover"
          alt={`attraction ${attraction.attractionId}`}
        />
      </Box>
      <Box className=" flex flex-col items-start justify-start gap-0.5 px-2 py-1.5 text-gray-500">
        <Typography
          variant="body2"
          className=" text-gray-900"
          style={{ fontWeight: 600 }}
        >
          {attraction.name}
        </Typography>
        <Typography variant="body2">{city}</Typography>

        <Box>
          <Typography
            variant="body2"
            className=" text-blue-500"
            style={{ display: 'inline' }}
          >
            {attraction.avgRating}
          </Typography>
          <Typography
            variant="body2"
            className=" text-gray-500"
            style={{ display: 'inline' }}
          >
            /5
          </Typography>
          <Typography
            variant="body2"
            className="ml-2"
            style={{ marginLeft: '0.5rem', display: 'inline' }}
          >
            {attraction.reviewCount}건의 리뷰
          </Typography>
        </Box>
      </Box>
    </Link>
  )
}

export default TourPopupItem
