import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { IoSearch } from 'react-icons/io5'
import filteringApi from '../../../fetch/filteringApi'
import Travel from './FilteringFuc/Travel'
import CheckInOut from './FilteringFuc/CheckInOut'
import RoomCount from './FilteringFuc/RoomCount'

function Hotel() {
  const [apiData, setAPIData] = useState(null)

  const handleBtnClick = async () => {
    try {
      const data = await filteringApi() // API 호출 함수 실행
      setAPIData(data) // 받은 데이터 상태 업데이트
    } catch (error) {
      // console.log('Destination 에러')
    }
  }

  useEffect(() => {}, [apiData])

  return (
    <Box className="flex">
      <Box className="w-2/6 h-fit">
        <Travel />
      </Box>

      <Box className="w-2/6 h-fit ml-[-75px] mr-1">
        <CheckInOut />
      </Box>

      <Box className="flex w-72 h-14 border rounded  m-auto mt-9 ml-[-10px] mr-2">
        <RoomCount />
      </Box>

      {/* 제출했을 때 호텔 목록 리스트로 넘겨지게 해야함 */}
      <Box className="flex justify-center items-center w-auto mt-9 mr-24">
        <Button
          onClick={handleBtnClick}
          variant="contained"
          className="w-fit h-14"
        >
          <IoSearch className="text-xl" />
        </Button>
      </Box>
    </Box>
  )
}

export default Hotel
