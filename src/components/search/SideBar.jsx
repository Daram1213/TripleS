import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function SideBar({ search }) {
  return (
    <nav className="relative my-4 flex gap-1 overflow-x-auto p-2 font-sans text-base font-normal text-gray-700 sm:flex-row md:flex-row lg:flex-col">
      <button
        tabIndex={-1}
        className="min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start active:bg-blue-600 active:text-gray-50"
      >
        <Typography className="w-[200px] text-lg font-medium leading-5">
          전체 (12,6372)
        </Typography>
      </button>
      <Link to={`/hotelList/${search}`}>
        <button
          tabIndex={-1}
          className="min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start active:bg-blue-600 active:text-gray-50"
        >
          <Typography className="w-[200px] text-lg font-medium leading-5">
            호텔 (12,6372)
          </Typography>
        </button>
      </Link>
      <Link to={`/tourList/${search}`}>
        <button
          tabIndex={-1}
          className="min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start active:bg-blue-600 active:text-gray-50"
        >
          <Typography className="w-[200px] text-lg font-medium leading-5">
            여행지 (12,6372)
          </Typography>
        </button>
      </Link>
    </nav>
  )
}

export default SideBar
