import React from 'react'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { LuDot } from 'react-icons/lu'
import fetchReview from '../../../fetch/fetchReview'

function ReviewCardComponent({ reviewData }) {
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
    <Box className="Reviewcard1 mb-5 w-96">
      {reviews.map((review) => {
        const reviewRawDate = new Date(review.updatedAt)
        const reviewDate = reviewRawDate.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })

        return (
          <Box>
            <Box className="flex flex-row w-96">
              <Box className="visitor-thumbnail">
                <img
                  className="w-8 h-8 object-cover rounded-full mt-5 mb-5 mr-1"
                  alt="reviewer"
                  src="../../../src/assets/img/review/image1.jpeg"
                />
              </Box>
              <Box className="host-profile flex flex-col ml-2 justify-center">
                <Box className="text-sm font-bold">{review.user}</Box>
              </Box>
            </Box>
            <Box className="flex flex-row">
              <Box className="rate_star text-xs">평점: {review.rating}점</Box>
              <LuDot />
              <Box className="visitDate text-xs">이용일: {reviewDate}</Box>
            </Box>

            <Box className="review_comment text-xs w-8/12 ">
              {review.content}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default ReviewCardComponent
