import { useState } from 'react'
import '/src/index.css'
import { Box, Container, Typography } from '@mui/material'
import HostInfoComponent from '../../../components/host_info/HostInfoComponent'
import Item1Component from '../../../components/host_info/Item1Component'
import Item2Component from '../../../components/host_info/Item2Component'
import Item3Component from '../../../components/host_info/Item3Component'

function Hostinfo() {
  const hostData = {
    name: '',
    year: 0,
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fCVFQyU4MiVBQyVFQiU5RSU4Q3xlbnwwfHwwfHx8MA%3D%3D',
  }
  return (
    <Box className="flex ml-3 max-w-lg">
      <Box className="host_info">
        <HostInfoComponent {...hostData} />

        <Box className="flex content-evenly h-80 w-5/6 flex-wrap border-y-2">
          <Box className="host-items flex flex-col">
            <Item1Component
              title="셀프 체크인"
              contents="스마트 도어록을 이용해
              체크인하세요."
            />

            <Item2Component
              title="n님은 슈퍼호스트입니다."
              contents="슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는
              호스트입니다."
            />

            <Item3Component
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

export default Hostinfo