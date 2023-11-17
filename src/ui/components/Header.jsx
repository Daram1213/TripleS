import React from 'react'
import '../../input.css'
import navCategories from '../../assets/dummyData/dummyData'

function Header() {
  return (
    <>
      <div className="main-hd-container bg-custom-bg relative w-screen h-96 bg-cover bg-no-repeat bg-center">
        <div className="main-hd-and-navbar relative overflow-hidden px-8">
          <div className="main-hd-inner max-x-9xl relative">
            <div className="main-hd-flex-icon">
              <div className="py-2">
                <a className="text-white w-8 h-5" href="/">
                  TripleS
                </a>
              </div>
            </div>
            <div className="main-hd-navbar-row">
              <div className="main-hd-nav-con">
                <ul className="main-hd-nav flex whitespace-nowrap">
                  {navCategories.map((category) => (
                    <li
                      key={category.categoryCode}
                      className="main-hd-nav-item inline-block float-none relative pr-8"
                    >
                      {' '}
                      <a
                        className="main-hd-nav-link text-white relative text-base inline-block h-5 pr-1 pb-1"
                        href="/{category.link}"
                        title="{category.title}"
                      >
                        {category.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
