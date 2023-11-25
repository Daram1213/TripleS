/* eslint-disable import/no-unresolved */
import React from 'react'
import { Box } from '@mui/material'
import HeaderLogo from './HeaderLogo'
import HeaderSearchBox from './HeaderSearchBox'
import FunctionOptions from './FunctionOptions'
import NavigationBar from './NavigationBar'
import Filtering from './Filtering/Filtering'
import FilteringApi from './Filtering/FilteringApi'

function Header() {
  return (
    <Box className="main-hd-container bg-custom-bg relative w-full bg-cover bg-no-repeat bg-center flow-root pb-60">
      <Box className="main-hd-flex-icon px-8 clear-both">
        <HeaderLogo />
        <HeaderSearchBox />
        <FunctionOptions />
        <NavigationBar />
        <FilteringApi />
      </Box>
      <Filtering />
    </Box>
  )
}
export default Header
