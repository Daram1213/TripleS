import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { TiStar } from 'react-icons/ti'
import { LuDot } from 'react-icons/lu'
import Evaluation1Component from './pages/detail/review/Evaluation1Component'
import Evaluation2Component from './pages/detail/review/Evaluation2Component'
import Evaluation3Component from './pages/detail/review/Evaluation3Component'
import Evaluation4Component from './pages/detail/review/Evaluation4Component'
import Evaluation5Component from './pages/detail/review/Evaluation5Component'
import Evaluation6Component from './pages/detail/review/Evaluation6Component'
import RateTotalComponent from './pages/detail/review/RateTotalComponent'
import ReviewCardComponent from './pages/detail/review/ReviewCardComponent'

function Review() {
  return (
    <Box>
      <Box className="flex  ml-3 mt-2 border-y-2 ">
        {/* ^---- width 추가할 것:max-w-lg */}
        <Box className="flex flex-col ">
          <Box className="flex flex-row">
            <Box className="review-title flex mb-4 mt-4">
              <TiStar size={30} />
              <Typography>3.58 • 후기 n 개</Typography>
            </Box>
          </Box>
          <Box className="flex flex-row mb-4 w-full ">
            <Box className="review_rate flex justify-between">
              <Box>
                <RateTotalComponent />
              </Box>
              <Box>
                <Evaluation1Component name="청결도" rate={4.3} />
              </Box>
              <Box>
                <Evaluation2Component name="정확도" rate={5} />
              </Box>
              <Box>
                <Evaluation3Component name="체크인" rate={4.7} />
              </Box>
              <Box>
                <Evaluation4Component name="의사소통" rate={5} />
              </Box>
              <Box>
                <Evaluation5Component name="위치" rate={4.5} />
              </Box>
              <Box>
                <Evaluation6Component name="가격 대비 만족도" rate={4} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex w-full h-full ml-3 ">
        <Box className="">
          <Box className=" review_list flex flex-wrap flex-[1_1_50%] border-b-2 pb-9">
            <Box className="review_card">
              <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            </Box>
            <Box className="review_card">
              <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            </Box>
            <Box className="review_card">
              <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            </Box>
            <Box className="review_card">
              <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            </Box>
            <Box className="review_card">
              <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            </Box>
            <Box className="review_card">
              <ReviewCardComponent name="Daniel" visitDate={2023.11} />
            </Box>

            <Box className="review_modal">
              <Button variant="outlined">후기 n개 모두 보기</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Review
