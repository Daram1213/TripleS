import React from 'react'
import ReviewCardModal from './pages/detail/review/ReviewCardModal'
import RateTotalComponent from './pages/detail/review/RateTotalComponent'
import ReviewCardComponent from './pages/detail/review/ReviewCardComponent'
import { useState, useEffect } from 'react'

import { TiStar } from 'react-icons/ti'
import { Box, Typography } from '@mui/material'
import fetchReview from './fetch/fetchReview'

function Review() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchReview()
        const data = response.lodging.review
        setReviews(data) // review api이 배열형태
      } catch (error) {
        console.error('리뷰 호출 중 에러 발생', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <Box>
      <fetchReview />
      <Box className="flex flex-col ml-3 mt-2 border-y-2 w-[1200px]">
        <Box className="flex flex-col">
          <Box className="review-title flex flex-row mb-4 mt-4 justify-evenly">
            <Box className="flex flex-row mt-10">
              <TiStar size={30} />
              <Typography>3.58 • 후기 {reviews.length}개</Typography>
            </Box>
            <RateTotalComponent />
          </Box>
        </Box>
      </Box>
      <Box className="flex w-full h-full ml-3 ">
        <Box className="">
          <Box className=" review_list flex flex-wrap flex-[1_1_50%]  pb-9 w-[1200px] justify-center">
            <Box className="review_card">
              <ReviewCardComponent />
            </Box>
            <Box className="review_card">
              <ReviewCardComponent />
            </Box>
          </Box>
          <Box className="review_modal border-b-2 ml-3">
            <ReviewCardModal />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Review
