<<<<<<<
import { Box } from '@mui/material'
import { Outlet } from 'react-router'
import SearchCard from '../../components/search/SearchCard'

function SearchPage() {
  return (
    <Box>
      <SearchCard />
      <Outlet />
    </Box>
  )
}

export default SearchPage

=======
import React from 'react'
import SearchCard from '../../components/search/SearchCard'

function SearchPage() {
  return (
    <div>
      <SearchCard />
    </div>
  )
}

export default SearchPage

>>>>>>>