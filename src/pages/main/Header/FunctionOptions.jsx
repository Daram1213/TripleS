import { useState } from 'react'
import { Box, Typography, Modal } from '@mui/material'
import SouthKoreaFlag from '../../../assets/img/SouthKorea.png'
// import AuthLogin from '../User/AuthLogin'
import AuthSignup from '../User/AuthSignup'

function FunctionOptions() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  return (
    <Box className="float-right flex text-white cursor-pointer items-center m-3 mr-8 absolute right-0 gap-4">
      <Typography>앱</Typography>
      <Typography>고객센터</Typography>
      <Box className="main-hd-a-tag">
        <img
          src={SouthKoreaFlag}
          alt="South Korea Flag"
          className="flag-ko-KR block w-7 bg-no-repeat"
        />
      </Box>
      <Typography>KRW</Typography>
      <Typography className="relative p-2 rounded-md bg-opacity-30 bg-slate-50">
        예약 검색
      </Typography>
      <Typography
        className="relative p-2 rounded-md bg-slate-50 text-black"
        onClick={handleOpen}
      >
        로그인 / 회원가입
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AuthSignup />
      </Modal>
    </Box>
  )
}

export default FunctionOptions
