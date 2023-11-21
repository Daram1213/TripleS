/* eslint-disable import/no-unresolved */
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import navCategories from '../../assets/dummyData/dummyData'
import SouthKoreaFlag from '../../assets/img/SouthKorea.png'

function Header() {
  return (
    <div className="main-hd-container bg-custom-bg relative w-screen h-96 bg-cover bg-no-repeat bg-center">
      <div className="main-hd-and-navbar relative overflow-hidden px-8">
        <div className="main-hd-inner max-x-9xl relative">
          <div className="main-hd-flex-icon relative h-16 clear-both">
            <div className="main-hd-logo-icon px-2 py-4 float-left">
              <a className="text-white w-8 h-5 text-xl font-black" href="/">
                TripleS
              </a>
            </div>
            <div className="main-hd-search-con w-96 max-w-xs relative float-left top-4 h-8 ml-2 pr-8">
              <div className="tripSearchBox-main relative bg-white rounded-md text-base flex">
                <div className="tripSearchBox-content border-solid border pr-8 flex rounded-md w-full">
                  <input
                    className="tripSearchBox-input whitespace-nowrap text-sm h-8 p-2 w-full box-border text-ellipsis ml-0.5"
                    placeholder="여행지, 명소, 호텔 등으로 검색"
                  />
                  {/* <div className="tripSearchBox-layer w-80 z-10 absolute overflow-auto top-8 max-w-lg bg-white border border-solid border-slate-300 shadow-slate-400">
                    <div className="tripSearchBox-inittitle block bg-slate-200 text-xs leading-8 text-slate-500 px-4">
                      인기여행지
                    </div>
                    <div className="tripSearchBox-layer-every">
                      <div>
                        <i className="tripSearchBox-icon" />
                        <div className="tripSearchBox-layer-word" />
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="tripSearchBox-btn top-0 w-8 absolute right-0 cursor-pointer p-0.5 rounded-sm overflow-hidden box-border m-0 h-full">
                  <div className="tripSearchBox-icon-wrapper bg-blue-600 rounded box-border m-0 p-0 h-full flex justify-center content-center flex-wrap">
                    <SearchIcon className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-hd-func-con float-right block">
              <div className="main-hd-func float-right text-white leading-5">
                <div className="main-hd-option float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
                  <div className="main-hd-mobile-click cursor-pointer relative inline-block p-2">
                    <div className="main-hd-a-tag text-white cursor-pointer leading-5 h-5 inline-block">
                      <span className="main-hd-mobile-App">앱</span>
                    </div>
                  </div>
                </div>
                <div className="main-hd-option float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
                  <div className="main-hd-help cursor-pointer relative inline-block p-2">
                    <div className="main-hd-a-tag text-white cursor-pointer leading-5 h-5 inline-block">
                      고객센터
                    </div>
                  </div>
                </div>
                <div className="main-hd-option main-hd-option-locale float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
                  <div className="main-hd-country cursor-pointer relative inline-block p-1">
                    <div className="main-hd-a-tag text-white cursor-pointer leading-5 h-5 inline-block">
                      <img
                        src={SouthKoreaFlag}
                        alt="South Korea Flag"
                        className="flag-ko-KR block w-7 h-7 bg-no-repeat"
                      />
                    </div>
                  </div>
                </div>
                <div className="main-hd-option float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
                  <div className="main-hd-currency cursor-pointer relative inline-block p-2">
                    <div className="main-hd-currency-cur text-white cursor-pointer leading-5 h-5 inline-block">
                      KRW
                    </div>
                  </div>
                </div>
                <div className="main-hd-search-booking float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
                  <div className="main-hd-search-booking-a-tag cursor-pointer relative flex p-2 h-8 rounded-md font-medium bg-opacity-30 bg-slate-50 items-center">
                    예약 검색
                  </div>
                </div>
                <div className="main-hd-account float-left block mx-1 my-4 leading-5 box-border text-sm cursor-pointer">
                  <div className="main-hd-search-booking-a-tag cursor-pointer relative flex p-2 h-8 rounded-md font-medium bg-slate-50 items-center text-black">
                    로그인 / 회원가입
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-hd-navbar-row h-8">
            <div className="main-hd-nav-con overflow-visible float-left">
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
                      <div className="new-category-add inline-block bg-red-500 text-white py-0.5 px-1 ml-0.5 text-xs relative rounded-sm h-5 bottom-0.5">
                        신규
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
