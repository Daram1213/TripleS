import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Button } from '@mui/base'

function SideBar({ keyword }) {
  const { pathname } = useLocation()
  const path = pathname.split('/')[1]

  useEffect(() => {
    const btns = document.querySelectorAll('.btn')

    btns.forEach((btn) => {
      if (path === 'tourSearchList' && btn.classList.contains('btn-tour')) {
        btn.classList.remove('text-gray-900')
        btn.classList.add('bg-blue-600')
        btn.classList.add('text-gray-50')
      }
      if (path === 'hotelSearchList' && btn.classList.contains('btn-hotel')) {
        btn.classList.remove('text-gray-900')
        btn.classList.add('bg-blue-600')
        btn.classList.add('text-gray-50')
      }
      if (path === 'searchList' && btn.classList.contains('btn-all')) {
        btn.classList.remove('text-gray-900')
        btn.classList.add('bg-blue-600')
        btn.classList.add('text-gray-50')
      }
    })
  }, [path])

  const check = 'forCheck'
  return (
    <nav className="min-w-[250px] relative my-4 flex gap-1 overflow-x-auto p-2 font-sans text-base font-normal text-gray-700 sm:flex-row md:flex-row lg:flex-col">
      <Link to={`/searchList/${keyword}`}>
        <Button
          tabIndex={-1}
          className="btn btn-all min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900"
        >
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            전체 (12,6372)
          </Typography>
        </Button>
      </Link>
      <Link to={`/hotelSearchList/${keyword}`}>
        <Button
          tabIndex={-1}
          className="btn btn-hotel min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900"
        >
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            호텔 (12,6372)
          </Typography>
        </Button>
      </Link>
      <Link to={`/tourSearchList/${keyword}`}>
        <Button
          tabIndex={-1}
          className="btn btn-tour min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start text-gray-900"
        >
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            여행지 (12,6372)
          </Typography>
        </Button>
      </Link>
      <Link to={`/commentList/${check}`}>
        <Button
          tabIndex={-1}
          className="min-w-90 flex h-12 items-center rounded-lg border border-solid border-gray-400 py-2 pl-6 text-start active:bg-blue-600 active:text-gray-50"
        >
          <Typography
            variant="body1"
            className="w-[200px] leading-5"
            style={{ fontSize: '1.05rem' }}
          >
            코멘트 (12,6372)
          </Typography>
        </Button>
      </Link>
    </nav>
  )
}

export default SideBar
