import { Box, Button } from '@mui/material'
import React from 'react'
import Swal from 'sweetalert2'

const DetailFooter = ({
  openModal,
  selectedRoom,
  selectedRoomType,
  selectedDates,
}) => {
  const handleClick = () => {
    if (
      !selectedRoom ||
      !selectedDates ||
      !selectedDates.startDate ||
      !selectedDates.endDate
    ) {
      Swal.fire({
        title: '알림',
        text: '방과 일정을 선택해주세요',
        icon: 'warning',
        confirmButtonText: '확인',
      })
    } else {
      openModal()
    }
  }

  return (
    <Box>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-700">
        {selectedRoomType && selectedRoom ? (
          <Box className="flex flex-col md:flex-row text-sm dark:text-gray-300">
            <Box className="mr-4 flex flex-col items-start">
              <span className="font-semibold text-lg text-gray-700 dark:text-white mb-2">
                ₩{selectedRoomType.price} /박
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {selectedDates.startDate} ~ {selectedDates.endDate}
              </span>
            </Box>
          </Box>
        ) : (
          <Box className="text-sm text-gray-500 dark:text-gray-300">
            객실과 일정을 선택해주세요
          </Box>
        )}

        <Box className="flex justify-end w-full mt-4 md:mt-0">
          <Button
            variant="contained"
            color="primary"
            className="hover:bg-blue-700"
            onClick={handleClick}
          >
            예약하기
          </Button>
        </Box>
      </footer>
    </Box>
  )
}

export default DetailFooter
