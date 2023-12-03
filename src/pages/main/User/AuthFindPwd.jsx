import { useState } from 'react'
import { Modal, Typography, Box, TextField, Button } from '@mui/material'
import PropTypes from 'prop-types'
import fetchFindUser from '../../../fetch/fetchFindUser'

function AuthFindPwd({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [temporaryPassword, setTemporaryPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetchFindUser(email, name)

    if (response && response.success) {
      // 임시 비밀번호를 상태에 저장합니다.
      setTemporaryPassword(temporaryPassword)
    }
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-2/5 p-4 bg-white rounded-md gap-3">
        <Typography
          display="flex"
          alignItems="flex-start"
          id="modal-modal-title"
          variant="h6"
          fontWeight="bold"
        >
          비밀번호 찾기
        </Typography>
        <TextField
          value={email}
          type="email"
          className="w-full"
          id="outlined-basic"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          variant="outlined"
          onChange={handleEmailChange}
        />
        <TextField
          value={name}
          type="text"
          className="w-full"
          id="outlined-basic"
          label="이름"
          placeholder="이름을 입력해주세요"
          variant="outlined"
          onChange={handleNameChange}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="w-full h-12"
          sx={{ backgroundColor: 'rgba(0, 0, 255, 0.5)' }}
        >
          확인
        </Button>
        {temporaryPassword && (
          <div>
            <p>임시 비밀번호: {temporaryPassword}</p>
          </div>
        )}
      </Box>
    </Modal>
  )
}
AuthFindPwd.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AuthFindPwd
