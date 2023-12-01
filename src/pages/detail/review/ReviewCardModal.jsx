import React from 'react'
import { Box, Button, Modal } from '@mui/material'
import ReviewCardComponent from './ReviewCardComponent'
import RateTotalComponent from './RateTotalComponent'
import { useState, useEffect } from 'react'

export default function ReviewCardModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://15.165.25.34:3000/api/lodgings/1')
        const data = await response.json()
        setReviews(data) // review api이 배열형태
      } catch (error) {
        console.error('리뷰 호출 중 에러 발생', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <Box>
      <Button onClick={handleOpen}>후기 {reviews.length}개 모두 보기</Button>
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
            후기 {reviews.length}개
            {reviews.map((review) => {
              ;<ReviewCardComponent
                key={review._id}
                name={review.user}
                visitDate={review.createdAt}
              />
            })}
            <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            <ReviewCardComponent name="Daniel" visitDate={2023.11} />
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
