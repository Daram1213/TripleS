import { Box, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

function AuthSignup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [birth, setBirth] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // 회원가입에 사용할 데이터
      const userData = {
        email,
        name,
        password,
        address,
        userId: 123,
        isAdmin: false,
      }

      // axios.post 메서드를 사용하여 POST 요청 보내기
      const response = await axios.post(
        'http://15.165.25.34:3000/api/signup',
        userData, // 요청 본문에 보낼 데이터
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      // if (response?.data?.success) {

      // } else if (response?.data?.error) {
      //   alert(response.data.error)
      //   alert('회원가입 실패')
      // }
      // 응답 데이터 출력
      // console.log('signUp', response.data)
    } catch (error) {
      // 에러 발생 시 처리
      // console.log('signUp failed', error)
    }
  }

  return (
    <Box className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-400 bg-white shadow-lg p-8 rounded h-max gap-2">
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '-1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        X
      </Typography>
      <Typography
        display="flex"
        alignItems="flex-start"
        id="modal-modal-title"
        variant="h6"
        fontWeight="bold"
      >
        회원가입
      </Typography>
      <Typography variant="caption" color="textSecondary">
        간편하게 예약을 관리하고 회원 전용 혜택도 누려보세요
      </Typography>
      <Box
        className="mt-6 w-full"
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          type="email"
          value={email}
          className="w-full"
          id="outlined-basic"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <TextField
          sx={{ marginTop: '8px' }}
          type="text"
          value={name}
          className="w-full"
          id="outlined-basic"
          label="이름"
          placeholder="이름을 입력해주세요"
          variant="outlined"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <TextField
          sx={{ marginTop: '8px' }}
          type="password"
          value={password}
          className="w-full"
          id="outlined-basic"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <TextField
          sx={{ marginTop: '8px' }}
          type="text"
          value={birth}
          className="w-full"
          id="outlined-basic"
          label="생일"
          placeholder="생일을 6자리를 입력해주세요"
          variant="outlined"
          onChange={(e) => {
            setBirth(e.target.value)
          }}
        />
        <TextField
          sx={{ marginTop: '8px' }}
          type="text"
          value={address}
          className="w-full"
          id="outlined-basic"
          label="주소"
          placeholder="주소를 입력해주세요"
          variant="outlined"
          onChange={(e) => {
            setAddress(e.target.value)
          }}
        />
      </Box>
      <Box className="mt-6 w-full">
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="w-full h-12"
          sx={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
        >
          회원가입
        </Button>
      </Box>
      <Box className="flex justify-center mt-2">
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ cursor: 'pointer' }}
        >
          로그인
        </Typography>
      </Box>
      <Typography variant="caption" color="textSecondary">
        로그인 또는 회원가입 시, TripleS 이용약관 및 개인정보 정책에 동의한
        것으로 간주합니다.
      </Typography>
    </Box>
  )
}

export default AuthSignup
