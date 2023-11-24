/* eslint-disable import/no-unresolved */
import React from 'react'
import { Box } from '@mui/material'
import HeaderLogo from './HeaderLogo'
import HeaderSearchBox from './HeaderSearchBox'
import FunctionOptions from './FunctionOptions'
import NavigationBar from './NavigationBar'
import Filtering from './Filtering/Filtering'

function Header() {
  return (
    <Box className="main-hd-container bg-custom-bg relative w-full bg-cover bg-no-repeat bg-center pb-20">
      <Box className="main-hd-flex-icon px-8 clear-both flow-root">
        <HeaderLogo />
        <HeaderSearchBox />
        <FunctionOptions />
        <NavigationBar />
      </Box>
      <Filtering />
    </Box>
  )
}
export default Header
