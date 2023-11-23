<<<<<<< refs/remotes/origin/main
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
=======
import { Box } from '@mui/material'
import { Outlet } from 'react-router'
>>>>>>> fix: fix css, routing, feat: update sidebar style that clicked
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

>>>>>>>