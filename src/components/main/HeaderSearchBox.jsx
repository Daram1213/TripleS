/* eslint-disable import/no-unresolved */
import React, { useState, useRef, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Input } from '@mui/material'

function HeaderSearchBox() {
  const [isPopularVisible, setPoPularVisible] = useState(false)
  const inputRef = useRef(null)

  const handleInputClick = () => {
    setPoPularVisible(true)
  }

  const handleClickOther = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setPoPularVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOther)
    return () => {
      document.removeEventListener('click', handleClickOther)
    }
  }, [])

  return (
    <Box className="main-hd-search-con w-96 max-w-xs relative float-left top-4 h-8 ml-2 pr-8">
      <Box className="tripSearchBox-main relative bg-white rounded-md text-base flex">
        <Box className="tripSearchBox-content border-solid border pr-8 flex rounded-md w-full">
          <Input
            ref={inputRef}
            onClick={handleInputClick}
            className="tripSearchBox-input h-8 px-2 pt-1 w-full ml-0.5"
            placeholder="여행지, 명소, 호텔 등으로 검색"
          />
          <Box
            className={`tripSearchBox-layer w-80 z-10 absolute overflow-auto top-8 mt-0.5 max-w-lg bg-white border border-solid border-slate-300 shadow-slate-400 ${
              isPopularVisible ? 'visible' : 'hidden'
            }`}
          >
            <Box className="tripSearchBox-inittitle block bg-slate-200 text-xs leading-8 text-slate-400 px-4">
              인기 여행지
            </Box>
            <Box className="tripSearchBox-layer-every">
              <Box>
                <i className="tripSearchBox-icon" />
                <Box className="tripSearchBox-layer-word" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="tripSearchBox-btn top-0 w-8 absolute right-0 cursor-pointer p-0.5 rounded-sm overflow-hidden box-border m-0 h-full">
          <Box className="tripSearchBox-icon-wrapper bg-blue-600 rounded box-border m-0 p-0 h-full flex justify-center content-center flex-wrap">
            <SearchIcon className="text-white" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderSearchBox
