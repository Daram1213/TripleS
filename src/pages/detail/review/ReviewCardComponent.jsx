import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { LuDot } from 'react-icons/lu'

function ReviewCardComponent({ name, visitDate }) {
  return (
    <Box className="Reviewcard1 mb-5 w-96">
      <Box className="flex flex-row w-96">
        <Box className="visitor-thumbnail">
          <img
            className="w-8 h-8 object-cover rounded-full mt-5 mb-5 mr-1"
            alt=""
            src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box className="host-profile flex flex-col ml-2 justify-center">
          <Box className="text-sm font-bold">{name}</Box>
          <Box className="text-xs">서울,대한민국</Box>
        </Box>
      </Box>
      <Box className="flex flex-row">
        <Box className="rate_star text-xs">별점</Box>
        <LuDot />
        <Box className="visitDate text-xs">{visitDate}</Box>
      </Box>

      <Box className="review_comment text-xs w-8/12 ">
        이태원의 조용한 주택가에 위치한 아름다운 아파트입니다. 모든 방향의
        지역에 쉽게 접근할 수 있으며, 성인 4명이 일주일 장기 숙박에 정말
        편안하게 머물 수 있습니다.
      </Box>
    </Box>
  )
}

export default ReviewCardComponent
