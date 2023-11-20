import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

//css
import './filtering.css'

//icon
import { FaHotel } from 'react-icons/fa6'
import { PiAirplaneTiltFill } from 'react-icons/pi'
import { IoMdTrain } from 'react-icons/io'
import { FaCar } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import { MdFlightTakeoff } from 'react-icons/md'
import { IoIosInformationCircle } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { IoMdStarOutline } from 'react-icons/io'
import { IoMdPerson } from 'react-icons/io'
import { IoAirplane } from 'react-icons/io5'
import { IoRemoveOutline } from 'react-icons/io5'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Filtering() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [checkInDate, setCheckInDate] = useState(null) //eslint-disable-line no-unused-vars

  const [checkOutDate, setCheckOutDate] = useState(null) //eslint-disable-line no-unused-vars

  // const handleCheckInChange = (date) => {
  //   //eslint-disable-line no-unused-vars
  //   setCheckInDate(date)
  // }

  // const handleCheckOutChange = (date) => {
  //   //eslint-disable-line no-unused-vars
  //   setCheckOutDate(date)
  // }

  return (
    <div className="p-20">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <>
                  <FaHotel /> 호텔
                </>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <>
                  <PiAirplaneTiltFill /> 항공권
                </>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <>
                  <IoMdTrain /> 기차표
                </>
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                <>
                  <FaCar /> 렌터카·공항픽업
                </>
              }
              {...a11yProps(3)}
            />
            <Tab
              label={
                <>
                  <IoTicket /> 투어&티켓
                </>
              }
              {...a11yProps(4)}
            />
            <Tab
              label={
                <>
                  <MdFlightTakeoff /> 항공 + 호텔
                </>
              }
              {...a11yProps(5)}
            />
          </Tabs>
        </Box>

        {/* 호텔 */}
        <CustomTabPanel value={value} index={0}>
          <div className="flex mt-2">
            <div className="border-t border-b border-l border-r border-grey rounded-b rounded-r w-300">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">여행지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="도시, 공항, 지역, 랜드마트, 호텔"
                />
              </div>
            </div>

            {/* 체크인 · 체크아웃 */}
            <div className="ml-2 border-t border-b border-l border-grey rounded-l w-200">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">체크인</span>
              </div>
              <div>
                <input
                  type="text"
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="12월 24일 (일)"
                />
              </div>
            </div>

            <div className="flex items-center border-t border-b">
              <span className="text-xs">1박</span>
            </div>

            <div className="border-t border-b border-r border-grey rounded-r w-200">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">체크아웃</span>
              </div>
              <div>
                <input
                  type="text"
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="12월 25일 (월)"
                />
              </div>
            </div>

            <div className="ml-2 border-t border-b border-l border-r border-grey rounded-b rounded-r w-300">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">객실당 인원 수</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="객실 1개, 성인 2명, 어린이 0명"
                />
              </div>
            </div>

            {/* 검색 버튼 */}
            <div className="flex justify-center items-center ml-2">
              <button className="flex justify-center items-center text-white bg-blue-600 w-full h-full text-2xl rounded-t rounded-b rounded-l p-3">
                <IoSearch />
                검색
              </button>
            </div>
          </div>

          {/* 2번째 */}
          <div className="flex items-center text-blue-900 mt-5 text-xs">
            <div className="flex items-center mr-5">
              <input id="trip" type="checkBox" />
              <label htmlFor="trip" className="text-gray-700 ml-3">
                출장
              </label>
              <IoIosInformationCircle className="ml-1" />
            </div>

            <div className="flex items-center">
              <span className="mr-3 text-gray-700">호텔 성급</span>
              <button className="flex items-center mr-3 p-1 bg-gray-200 rounded w-16">
                <div className="flex items-center justify-center text-center w-full">
                  <span>&#8804; 2</span>
                  <IoMdStarOutline className="ml-1" />
                </div>
              </button>
              <button className="flex items-center mr-3 p-1 bg-gray-200 rounded w-16">
                <div className="flex items-center justify-center text-center w-full">
                  <span>3</span>
                  <IoMdStarOutline className="ml-1" />
                </div>
              </button>
              <button className="flex items-center mr-3 p-1 bg-gray-200 rounded w-16">
                <div className="flex items-center justify-center text-center w-full">
                  <span>4</span>
                  <IoMdStarOutline className="ml-1" />
                </div>
              </button>
              <button className="flex items-center mr-3 p-1 bg-gray-200 rounded w-16">
                <div className="flex items-center justify-center text-center w-full">
                  <span>5</span>
                  <IoMdStarOutline className="ml-1" />
                </div>
              </button>
            </div>
          </div>
        </CustomTabPanel>

        {/* 항공권 */}
        <CustomTabPanel value={value} index={1}>
          <div className="flex mb-5 text-blue-900">
            <div className="flex w-3/5">
              <div className="flex items-center mr-5 text-sm">
                <PiAirplaneTiltFill />
                <label>왕복</label>
              </div>
              <div className="flex items-center mr-5 text-sm">
                <IoMdPerson />
                <label>성인 1명</label>
              </div>
              <div className="flex items-center mr-5 text-sm">
                <MdAirlineSeatReclineNormal />
                <label>일반석</label>
              </div>
            </div>
            <div className="flex items-center mr-5 text-sm w-2/5 justify-end">
              <input type="checkBox"></input>
              <label className="ml-2">항공 + 호텔</label>
            </div>
          </div>

          {/* 출발지 - 도착지 */}
          <div className="flex">
            <div>
              <input
                className="border-t border-b border-l border-grey rounded-l w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                placeholder="출발지"
              />
            </div>

            <div className="flex items-center border-t border-b">
              <IoAirplane className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
            </div>

            <div>
              <input
                className="border-t border-b border-r border-grey rounded-r w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                placeholder="도착지"
              />
            </div>

            {/*  */}
            <div>
              <input
                className="ml-4 border-t border-b border-l border-grey rounded-t rounded-l w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                placeholder="11월 21일 (화)"
              />
            </div>

            <div className="flex items-center ml-7">
              <IoRemoveOutline />
            </div>

            <div>
              <input
                className="ml-2 border-t border-b border-r border-grey rounded-t rounded-r w-200 focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                placeholder="11월 24일 (금)"
              />
            </div>

            {/* 검색 버튼 */}
            <div className="flex justify-center items-center ml-5">
              <button className="flex items-center text-white bg-blue-600 w-full h-11 text-xl rounded-t rounded-b rounded-l p-6">
                <IoSearch />
                검색
              </button>
            </div>
          </div>
        </CustomTabPanel>

        {/* 기차표 */}
        <CustomTabPanel value={value} index={2}>
          <div className="flex mb-5 text-blue-900">
            <div className="flex items-center">
              <input type="checkBox" className="mr-2" />
              <label className="mr-5 text-sm">중국</label>
            </div>
            <div className="flex items-center">
              <input type="checkBox" className="mr-2" />
              <label className="mr-5 text-sm">영국</label>
            </div>
            <div className="flex items-center">
              <input type="checkBox" className="mr-2" />
              <label className="mr-5 text-sm">국내</label>
            </div>
            <div className="flex items-center">
              <input type="checkBox" className="mr-2" />
              <label className="mr-5 text-sm">유럽</label>
            </div>
          </div>

          {/* 출발지 */}
          <div className="flex">
            <div className="border-t border-b border-l border-grey rounded-l w-200">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">출발지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="서울"
                />
              </div>
            </div>

            <div className="flex items-center border-t border-b">
              <IoMdTrain className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
            </div>

            <div className="border-t border-b border-r border-grey w-200">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">도착지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="부산"
                />
              </div>
            </div>

            {/* 출발 시간 */}
            <div className="border-t border-b border-r border-grey w-200">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">출발 시간</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 19일 (일)"
                />
              </div>
            </div>

            {/* 승객 */}
            <div className="border-t border-b border-r border-grey w-200">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">승객</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="5명"
                />
              </div>
            </div>

            {/* 검색 버튼 */}
            <div>
              <button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  background: '#3264ff',
                  width: 'auto',
                  height: '90px',
                  fontSize: '30px',
                  borderRadius: '0 2px 2px 0',
                  padding: '15px',
                }}
              >
                <IoSearch />
              </button>
            </div>
          </div>
        </CustomTabPanel>

        {/* 렌터카 · 공항픽업 */}
        <CustomTabPanel value={value} index={3}>
          <div className="border-t border-b border-l border-r border-grey w-200">
            <div className="flex text-grey-700 p-3">
              <span className="text-xs">인수장소</span>
            </div>
            <div>
              <input
                className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                placeholder="공항, 도시, 역, 지역, 상권으로 검색"
              />
            </div>
          </div>

          {/* 인수일시 */}
          <div className="flex">
            <div className="border-t border-b border-l border-grey w-1/5">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">인수일시</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 21일 (화)"
                />
              </div>
            </div>

            <div className="border-t border-b border-r border-grey w-1/5">
              <div className="flex text-grey-700 p-3">
                <span className="invisible">아</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="| 10:00"
                />
              </div>
            </div>

            {/* 반납일시 */}
            <div className="border-t border-b border-l border-grey w-1/5">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">반납일시</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 24일 (금)"
                />
              </div>
            </div>

            <div className="border-t border-b border-r border-grey w-1/5">
              <div className="flex text-grey-700 p-3">
                <span className="invisible">아</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="| 10:00"
                />
              </div>
            </div>

            {/* 검색 버튼 */}
            <div className="w-1/5">
              <button className="flex items-center justify-center text-white bg-blue-600 w-full h-full text-3xl p-15">
                <IoSearch />
              </button>
            </div>
          </div>

          {/* 두번째 */}
          <div className="flex flex-row items-center text-blue-900 mt-5 text-sm">
            <div className="flex items-center mr-5">
              <span className="text-gray-700">출장</span>
              <IoIosInformationCircle className="ml-5 text-gray-500" />
              <span className="text-blue-900 font-semibold">한국</span>
            </div>
            <div className="flex items-center mr-5">
              <span className="text-gray-700 ml-5">연령(만)</span>
              <IoIosInformationCircle className="ml-5 text-gray-500" />
              <span className="text-blue-900 font-semibold">30~60세</span>
            </div>
          </div>
        </CustomTabPanel>

        {/* 투어 & 티켓 */}
        <CustomTabPanel value={value} index={4}>
          <div className="flex">
            {/* 여행지 */}
            <div className="border-t border-b border-r border-l border-grey rounded-l w-2/5">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">여행지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="도시 또는 지역"
                />
              </div>
            </div>

            {/* 승객 */}
            <div className="border-t border-b border-r border-grey w-3/5">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">키워드 (선택 사항)</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="액티비티 또는 어트랙션 검색"
                />
              </div>
            </div>

            {/* 검색 버튼 */}
            <div>
              <button className="flex items-center justify-center text-white bg-blue-600 w-auto h-full text-3xl p-5">
                <IoSearch />
              </button>
            </div>
          </div>
        </CustomTabPanel>

        {/* 항공 + 호텔 */}
        <CustomTabPanel value={value} index={5}>
          <div className="flex mb-5 text-blue-900">
            <div className="flex w-3/5">
              <div className="flex items-center mr-5 text-sm">
                <PiAirplaneTiltFill />
                <label>왕복</label>
              </div>
              <div className="flex items-center mr-5 text-sm">
                <IoMdPerson />
                <label>성인 1명 | 객실 1개</label>
              </div>
            </div>
          </div>

          {/* 출발지 */}
          <div className="flex">
            <div>
              <button className="flex items-center justify-center text-white bg-blue-600 w-10 h-full rounded-l p-2">
                <PiAirplaneTiltFill className="text-xs" />
              </button>
            </div>
            <div className="border-t border-b border-l border-grey w-1/4">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">출발지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="서울"
                />
              </div>
            </div>

            <div className="flex items-center border-t border-b">
              <IoAirplane className="text-2xl text-blue-600 border-2 border-blue-600 rounded-full p-1" />
            </div>

            <div className="border-t border-b border-r border-grey w-1/4 rounded-r">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">도착지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="도시명 또는 공항명"
                />
              </div>
            </div>

            {/* 가는편 오는편 */}
            <div className="ml-2 border-t border-b border-l rounded-b rounded-l border-grey w-1/4">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">가는편</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 24일 (일)"
                />
              </div>
            </div>

            <div className="flex items-center border-t border-b border-grey">
              <IoRemoveOutline />
            </div>

            <div className="border-t border-b border-r border-grey w-1/4 rounded-r rounded-b">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">오는편</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 25일 (월)"
                />
              </div>
            </div>
          </div>

          {/* 2번째 도착지 */}
          <div className="flex mt-3">
            <div>
              <button className="flex items-center justify-center text-white bg-blue-600 w-10 h-full rounded-l p-2">
                <FaHotel className="text-xs" />
              </button>
            </div>
            <div className="border-t border rounded-r border-grey w-2/5">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">도착지</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="도시"
                />
              </div>
            </div>

            {/* 체크인 체크아웃 */}
            <div className="ml-2 border-t border-b border-l rounded-b rounded-l border-grey w-1/4">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">체크인</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 24일 (일)"
                />
              </div>
            </div>

            <div className="flex items-center border-t border-b border-gre w-8">
              <span className="text-xs flex items-center text-center">3박</span>
            </div>

            <div className="border-t border-b border-r border-grey w-3/12 rounded-r rounded-b">
              <div className="flex text-grey-700 p-3">
                <span className="text-xs">체크아웃</span>
              </div>
              <div>
                <input
                  className="focus:border-b-2 focus:border-blue-500 p-3 w-full outline-none text-sm"
                  placeholder="11월 25일 (월)"
                />
              </div>
            </div>

            {/* 검색 버튼 */}
            <div className="flex justify-center items-center ml-2 w-2/12">
              <button className="flex items-center justify-center text-white bg-blue-600 w-full h-full text-2xl rounded-r rounded-l p-5">
                <IoSearch />
                검색
              </button>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  )
}
