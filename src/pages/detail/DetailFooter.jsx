import { Box } from '@mui/material'
import React from 'react'

function DetailFooter({ roomTypeData, reservations, openModal }) {
  return (
    <Box>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <Box className="flex flex-col md:flex-row text-sm dark:text-gray-400">
          <Box style={{ whiteSpace: 'nowrap' }}>
            <Box className="font-bold text-xl mb-2">
              ₩{roomTypeData.price} /박
            </Box>
          </Box>
          <Box className="md:ml-4" style={{ whiteSpace: 'nowrap' }}>
            <Box className="text-xl mb-2">
              {reservations[0].checkInDate} ~ {reservations[0].checkOutDate}
            </Box>
          </Box>
        </Box>

        <Box className="flex justify-end w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            예약하기
          </button>
        </Box>
      </footer>
    </Box>
  )
}

export default DetailFooter
