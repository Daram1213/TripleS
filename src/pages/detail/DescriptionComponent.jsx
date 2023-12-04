import React, { useState } from 'react'
import { Box, Typography, Button, Modal } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle' // CheckCircleIcon 대체
import InfoIcon from '@mui/icons-material/Info' // InformationCircleIcon 대체
import HelpOutlineIcon from '@mui/icons-material/HelpOutline' // QuestionMarkCircleIcon 대체
import CloseIcon from '@mui/icons-material/Close' // XIcon 대체

const DescriptionComponent = ({ lodgingData }) => {
  const [showModal, setShowModal] = useState(false)

  const getIcon = (optionType) => {
    switch (optionType) {
      case '프론트서비스':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'info':
        return <InfoIcon className="h-5 w-5 text-blue-500" />
      case 'question':
      default:
        return <HelpOutlineIcon className="h-5 w-5 text-yellow-500" />
    }
  }

  return (
    <Box className="max-w-lg mx-auto p-4">
      <Box className="flex justify-between items-center mb-4">
        <Box>
          <Typography variant="h5" className="font-bold">
            {lodgingData.lodging.name}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {lodgingData.lodging.details}
          </Typography>
        </Box>
        <Box className="rounded-full bg-pink-500 h-12 w-12 flex items-center justify-center">
          <Typography className="text-white text-lg">dd</Typography>
        </Box>
      </Box>

      <Box className="mb-4">
        {lodgingData.lodging.option.map((option, index) => (
          <Box key={index} className="flex items-center space-x-2 mb-3">
            {getIcon(option.type)}
            <Typography variant="body2">{option.details}</Typography>
          </Box>
        ))}
      </Box>

      <Box className="bg-gray-100 p-4">
        <Typography variant="body2" className="mb-2">
          {lodgingData.lodging.specialInfo}
          <Typography component="span" className="text-blue-500 cursor-pointer">
            원문 보기
          </Typography>
        </Typography>
        <Typography variant="body2" className="mb-2">
          {lodgingData.lodging.rule}
        </Typography>
        <Typography variant="body2">
          {lodgingData.lodging.description}
        </Typography>
        <Button
          className="mt-4 border rounded-md"
          onClick={() => setShowModal(true)}
        >
          더 보기
        </Button>
      </Box>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        className="flex items-start justify-center"
      >
        <Box className="bg-white p-5 border rounded-md w-11/12 max-w-md mt-10 shadow-lg">
          <Box className="flex justify-between items-center mb-4">
            <Typography variant="h6">숙소 설명</Typography>
            <Button onClick={() => setShowModal(false)}>
              <CloseIcon />
            </Button>
          </Box>
          <Typography variant="body2" className="mb-2">
            {lodgingData.lodging.description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default DescriptionComponent
