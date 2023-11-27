/* eslint-disable import/extensions */
import React from 'react'
import Header from './main/Header'
import HomeBody from './main/HomeBody/HomeBody'
import Footer from './main/Footer/Footer'

function MainPage() {
  return (
    <>
      <Header />
      <Footer />
      <HomeBody />
      <Footer />
    </>
  )
}

export default MainPage
