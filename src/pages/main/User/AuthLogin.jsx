import { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
} from '@mui/material'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { useNavigate } from 'react-router'
import fetchLogin from '../../../fetch/fetchLogin'

function AuthLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await fetchLogin(email, password)
    const { accessToken, refreshToken } = result
    localStorage.setItem('access', accessToken)
    localStorage.setItem('refresh', refreshToken)
    router('/')
  }

  const [isValidEmail, setIsValidEmail] = useState(true)

  const isValidEmailFormat = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(inputEmail)
  }

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value
    const isValid = isValidEmailFormat(inputEmail)
    setEmail(inputEmail)
    setIsValidEmail(isValid)
  }

  return (
    <Box className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 bg-white shadow-lg p-6 rounded h-4/5 gap-2">
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
        로그인
      </Typography>
      <Typography variant="caption" color="textSecondary">
        간편하게 예약을 관리하고 회원 전용 혜택도 누려보세요
      </Typography>
      <Box
        className="mt-6 w-full flex flex-col gap-2"
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          type="email"
          value={email}
          className={`w-full ${isValidEmail ? 'valid' : 'invalid'}`}
          id="outlined-basic"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          variant="outlined"
          onChange={handleEmailChange}
        />
        {!isValidEmail && email.length > 0 && (
          <Box className="text-red-500">유효하지 않은 이메일 형식입니다.</Box>
        )}
        <TextField
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
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          className="w-full h-12"
          sx={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
        >
          로그인
        </Button>
      </Box>
      <Box className="flex justify-center mt-2">
        <Link
          to="/signup"
          variant="body2"
          color="textSecondary"
          sx={{ cursor: 'pointer' }}
        >
          회원가입
        </Link>
      </Box>
      <Box className="flex justify-center mt-6 relative">
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            width: '100%',
            position: 'absolute',
            top: '50%',
          }}
        />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#fff',
            padding: '0 8px',
          }}
        >
          다른 로그인 방식
        </Typography>
      </Box>
      <Box className="flex justify-center m-6 ">
        <Typography>
          <SiNaver class="text-4xl text-white  rounded-full bg-green-500 p-2.5 cursor-pointer" />
        </Typography>
        <Typography>
          <RiKakaoTalkFill class="text-4xl rounded-full bg-yellow-300 p-2 ml-6 cursor-pointer" />
        </Typography>
        <Typography>
          <FcGoogle class="text-4xl ml-6 rounded-full bg-white-500 p-2 border cursor-pointer" />
        </Typography>
      </Box>
      <Typography variant="caption" color="textSecondary">
        로그인 또는 회원가입 시, TripleS 이용약관 및 개인정보 정책에 동의한
        것으로 간주합니다.
      </Typography>
    </Box>
  )
}

export default AuthLogin
