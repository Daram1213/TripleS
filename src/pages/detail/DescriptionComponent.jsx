import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import {
  CheckCircleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/solid'

const DescriptionComponent = ({ lodgingData }) => {
  console.log(lodgingData)

  const [showModal, setShowModal] = useState(false)

  const getIcon = (optionType) => {
    switch (optionType) {
      case '프론트서비스':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'info':
        return <InformationCircleIcon className="h-5 w-5 text-blue-500" />
      case 'question':
      default:
        return <QuestionMarkCircleIcon className="h-5 w-5 text-yellow-500" />
    }
  }
  return (
    <Box sx={{ maxWidth: 'lg', mx: 'auto', p: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            Ddnayo 나이 호스팅하는 펜션
          </Typography>
          <Typography variant="body2" color="text.secondary">
            차대 일명 · 체험 1개 · 손님 1명
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: '50%',
            bgcolor: 'pink',
            height: 48,
            width: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ color: 'white', fontSize: 'large' }}>dd</Typography>
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        {lodgingData.lodging.option.map((option, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            {getIcon(option.category)}
            <Typography variant="body2" sx={{ ml: 2 }}>
              {option.details}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ bgcolor: 'grey.100', p: 4 }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          특별한 정보는 자동 번역되었습니다.
          <Typography
            component="span"
            sx={{ color: 'blue', cursor: 'pointer' }}
          >
            원문 보기
          </Typography>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {lodgingData.lodging.rule}
        </Typography>
        <Typography variant="body2">
          {lodgingData.lodging.description}
        </Typography>
        <Button
          sx={{ mt: 4 }}
          variant="outlined"
          onClick={() => setShowModal(true)}
        >
          더 보기
        </Button>
      </Box>

      {/* Modal for more information */}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}
      >
        <Box
          sx={{
            p: 5,
            border: 1,
            borderRadius: 1,
            bgcolor: 'background.paper',
            width: '90%',
            maxWidth: 'md',
            mt: 10,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography variant="h6" component="h3">
              숙소 설명
            </Typography>
            <Button onClick={() => setShowModal(false)}>
              <XIcon />
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {lodgingData.lodging.description}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            숙소
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {lodgingData.lodging.theme}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            운영 시간
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {lodgingData.lodging.rule}
          </Typography>
          {/* ... additional content ... */}
        </Box>
      </Modal>
    </Box>
  )
}

export default DescriptionComponent
