import { useState } from 'react'
<<<<<<< HEAD
import '../../index.css'
import { Box, Container, Typography } from '@mui/material'
import HostInfo from './HostInfoComponent'
import Item1 from './Item1Component'
import Item2 from './Item2Component'
import Item3 from './Item3Component'

function App() {
  const hostData = {
    name: '',
    year: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D',
  }
  return (
    <Box className="flex ml-3 max-w-lg">
      <Box className="host_info">
        <HostInfo {...hostData} />

        <Box className="flex content-evenly h-80 w-5/6 flex-wrap border-y-2">
          <Box className="host-items flex flex-col">
            <Item1
              title="셀프 체크인"
              contents="스마트 도어록을 이용해
              체크인하세요."
            />

            <Item2
              title="n님은 슈퍼호스트입니다."
              contents="슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는
              호스트입니다."
            />

            <Item3
              title="순조로운 체크인 과정"
              contents="최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준
              숙소입니다."
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
=======
import React from 'react'

function HostInfo({ name, year, imageUrl }) {
  return (
    <div className="flex flex-row mb-2 mt-2 w-5/6 border-t-2 ">
      <div className="host-container flex">
        <div className="host-thumbnail">
          <img
            className="w-12 h-12 object-cover rounded-full mt-5 mb-5"
            alt=""
            src={imageUrl}
          />
        </div>
        <div className="host-profile flex flex-col ml-10 justify-center">
          <div className="text-base font-bold">
            <h3>호스트: {name}님 </h3>
          </div>
          <div className="text-sm ">
            <div>호스트 경력 {year}년 </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostInfo
>>>>>>> 87282a9 (chore: amending forder tree from components to pages)