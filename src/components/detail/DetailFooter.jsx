import React from 'react'
// import { useNavigate } from 'react-router-dom'

const DetailFooter = ({ lodging, reservations }) => {
  //   const navigate = useNavigate()

  //   const handleReservation = () => {
  //     // 예약 페이지로 이동하는 로직
  //     navigate('/reservation', { state: { lodging, reservations } })
  //   }

  return (
    <div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div className="flex flex-col md:flex-row text-sm text-gray-500 dark:text-gray-400">
          <div>₩{lodging.rooms[0].price} /박</div>
          <div className="md:ml-4">
            {reservations[0].checkInDate} ~ {reservations[0].checkOutDate}
          </div>
        </div>

        <div className="flex justify-end w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={handleReservation}
          >
            예약하기
          </button>
        </div>
      </footer>
    </div>
  )
}

export default DetailFooter
