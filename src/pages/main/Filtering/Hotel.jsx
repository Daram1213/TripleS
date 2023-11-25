import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { IoSearch } from 'react-icons/io5'
import RoomCount from './FilteringFuc/RoomCount'
import Destination from './FilteringFuc/Travel'
import CheckInOut from './FilteringFuc/CheckInOut'
import FilteringApi from './fetch/FilteringApi'

function Hotel() {
  const [apiData, setAPIData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await FilteringApi() // API 호출 함수 실행
        setAPIData(data) // 받은 데이터 상태 업데이트
        console.log('apiData:', data)
      } catch (error) {
        console.log('Destination 에러')
      }
    }
    getData()
  }, [])
  console.log('A:', apiData)

  return (
    <Box className="flex">
      <Box className="w-8/12 h-fit">
        <Destination />
      </Box>

      <Box className="w-8/12 h-fit ml-2">
        <CheckInOut />
      </Box>

      <Box className="ml-2 border-t border-b border-l border-r border-grey rounded-l w-7/12">
        <RoomCount />
      </Box>

      {/* 제출했을 때 호텔 목록 리스트로 넘겨지게 해야함 */}
      <Box className="flex justify-center items-center ml-2 w-2/12">
        <Button
          variant="contained"
          className="flex items-center justify-center text-white bg-blue-600 w-full h-10 text-lg rounded-r-lg rounded-l-lg p-2 transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <IoSearch className="text-xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
