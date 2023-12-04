import { Typography, Box } from '@mui/material'

function MemberInfo() {
  return (
    <Box className="bg-slate-300">
      <Box className="flex">
        <Typography>이름:</Typography>
        <Typography>홍길동</Typography>
      </Box>
      <Box className="flex">
        <Typography>이메일:</Typography>
        <Typography>홍길동</Typography>
      </Box>
      <Box className="flex">
        <Typography>이름:</Typography>
        <Typography>홍길동</Typography>
      </Box>
    </Box>
  )
}

export default MemberInfo
