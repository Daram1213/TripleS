import { Typography, Box } from '@mui/material'
// import { IoIosInformationCircle, IoMdStarOutline } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

function Hotel() {
  return (
    <Box className="flex mt-2">
      <Box className="border-t border-b border-l border-r border-grey rounded-b rounded-r w-300">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">여행지</Typography>
        </Box>
        <Box>
          <input
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="도시, 공항, 지역, 랜드마트, 호텔"
          />
        </Box>
      </Box>

      {/* 체크인 · 체크아웃 */}
      <Box className="ml-2 border-t border-b border-l border-grey rounded-l w-200">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">체크인</Typography>
        </Box>
        <Box>
          <input
            type="date"
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
          />
        </Box>
      </Box>

      <Box className="flex items-center border-t border-b">
        <Typography className="text-xs">1박</Typography>
      </Box>

      <Box className="border-t border-b border-r border-grey rounded-r w-200">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">체크아웃</Typography>
        </Box>
        <Box>
          <input
            type="date"
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
          />
        </Box>
      </Box>

      <Box className="ml-2 border-t border-b border-l border-r border-grey rounded-b rounded-r w-300">
        <Box className="flex text-grey-700 p-3">
          <Typography className="text-xs">객실당 인원 수</Typography>
        </Box>
        <Box>
          <input
            className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
            placeholder="객실 1개, 성인 2명, 어린이 0명"
          />
        </Box>
      </Box>

      {/* 검색 버튼 */}
      <Box className="flex justify-center items-center ml-2">
        <button className="flex justify-center items-center text-white bg-blue-600 w-full h-full text-2xl rounded-t rounded-b rounded-l p-3">
          <IoSearch />
          검색
        </button>
      </Box>
    </Box>
  )
}

export default Hotel
