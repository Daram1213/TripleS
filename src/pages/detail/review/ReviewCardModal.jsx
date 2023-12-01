import React from 'react'
import { Box, Button, Modal } from '@mui/material'
import ReviewCardComponent from './ReviewCardComponent'
import RateTotalComponent from './RateTotalComponent'

export default function ReviewCardModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Button onClick={handleOpen}>후기 n개 모두 보기</Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-review_list"
      >
        <Box className="flex flex-row absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl border-2 rounded w-[800px] h-[1000px] bg-white justify-center pt-7">
          <Box className="pr-5">
            <RateTotalComponent />
          </Box>

          <Box className="modal_modal_title" variant="h6" component="h2">
            {/* 후기 N개 */}
          </Box>
          <Box className="modal_review_list pl-5">
            {' '}
            후기 N개
            <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            <ReviewCardComponent name="Daniel" visitDate={2023.11} />
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
