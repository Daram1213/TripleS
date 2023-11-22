/* eslint-disable import/no-unresolved */
import React from 'react'
import Box from '@mui/material/Box'
import navCategories from '../../assets/dummyData/dummyData'

function NavigationBar() {
  return (
    <Box className="main-hd-navbar-row h-8">
      <Box className="main-hd-nav-con overflow-visible float-left">
        <ul className="main-hd-nav flex whitespace-nowrap flex-row">
          {navCategories.map((category) => (
            <li
              key={category.categoryCode}
              className="main-hd-nav-item inline-block float-none relative pr-8"
            >
              <a
                className="main-hd-nav-link text-white relative text-base inline-block h-5 pr-1 pb-1 after:block after:h-0.5 after:bg-white after:top-6 after:origin-right transition duration-150 ease-in-out after:scale-x-0"
                href="/{category.link}"
                title="{category.title}"
              >
                {category.title}
              </a>
              {category.newCategory === 'true' ? (
                <Box className="new-category-add inline-block bg-red-500 text-white py-0.5 px-1 ml-0.5 text-xs relative rounded-sm h-5 bottom-0.5">
                  신규
                </Box>
              ) : null}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default NavigationBar
