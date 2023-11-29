/* eslint-disable import/no-unresolved */
import { Box, Typography } from '@mui/material'
import SouthKoreaFlag from '../../../assets/img/SouthKorea.png'

function FunctionOptions() {
  return (
    <Box className="float-right flex text-white cursor-pointer items-center m-3 mr-8 absolute right-0">
      <Typography sx={{ marginRight: '1rem' }}>앱</Typography>
      <Typography sx={{ marginRight: '1rem' }}>고객센터</Typography>
      <Box className="main-hd-a-tag mr-4">
        <img
          src={SouthKoreaFlag}
          alt="South Korea Flag"
          className="flag-ko-KR block w-7 bg-no-repeat"
        />
      </Box>
      <Typography sx={{ marginRight: '1rem' }}>KRW</Typography>
      <Typography
        sx={{ marginRight: '1rem' }}
        className="relative p-2 rounded-md bg-opacity-30 bg-slate-50"
      >
        예약 검색
      </Typography>
      <Typography className="relative p-2 rounded-md bg-slate-50 text-black">
        로그인 / 회원가입
      </Typography>
    </Box>
  )
}

export default FunctionOptions
