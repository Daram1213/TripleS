import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { LuDot } from 'react-icons/lu'

function ReviewCardComponent({ reviewData }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://15.165.25.34:3000/api/lodgings/1')
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error('리뷰 호출 중 에러 발생', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <Box className="Reviewcard1 mb-5 w-96">
      {reviews.map((review) => {})}
      <Box className="flex flex-row w-96">
        <Box className="visitor-thumbnail">
          <img
            className="w-8 h-8 object-cover rounded-full mt-5 mb-5 mr-1"
            alt=""
            src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box className="host-profile flex flex-col ml-2 justify-center">
          <Box className="text-sm font-bold">{reviews.user}</Box>
          <Box className="text-xs">서울,대한민국</Box>
        </Box>
      </Box>
      <Box className="flex flex-row">
        <Box className="rate_star text-xs">{reviews.rating}</Box>
        <LuDot />
        <Box className="visitDate text-xs">{createdAt}</Box>
      </Box>

      <Box className="review_comment text-xs w-8/12 ">
        {reviews.content}
        이태원의 조용한 주택가에 위치한 아름다운 아파트입니다. 모든 방향의
        지역에 쉽게 접근할 수 있으며, 성인 4명이 일주일 장기 숙박에 정말
        편안하게 머물 수 있습니다.
      </Box>
    </Box>
  )
}

export default ReviewCardComponent
