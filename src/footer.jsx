import React from 'react'
import { Link } from 'react-router-dom'
// css
import './index.css'

// icon
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { SiNaver } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

// icon-img
import pay1 from './icon-img/pay1.png'
import pay2 from './icon-img/pay2.png'
import pay3 from './icon-img/pay3.png'
import pay4 from './icon-img/pay4.png'
import affiliate1 from './icon-img/affiliate1.png'
import affiliate2 from './icon-img/affiliate2.png'
import second1 from './icon-img/second1.png'
import second2 from './icon-img/second2.png'

function Footer() {
  return (
    <footer className="flex justify-center border-t border-gray-300">
      <div className="max-w-7xl w-full pt-8 pb-12 text-blue-950">
        <div>
          {/* 1번째 단락 */}
          <div className="w-full flex justify-between mb-5">
            <div className="flex flex-col pr-3.5">
              {/* 고객문의 */}
              <div className="font-semibold mt-5 mb-5">고객 문의</div>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                고객센터
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                서비스 보장제
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                웹사이트 피드백
              </Link>
              <div className="flex mt-8">
                <div className="bg-gray-600 text-white text-xs p-2 rounded-full mr-4 flex justify-center items-center">
                  <i className="fa">
                    <FaFacebookF />
                  </i>
                </div>
                <div className="bg-gray-600 text-white text-xs p-2 rounded-full mr-4 flex justify-center items-center">
                  <i className="fa">
                    <FaInstagram />
                  </i>
                </div>
                <div className="bg-gray-600 text-white text-xs p-2 rounded-full mr-4 flex justify-center items-center">
                  <i className="fa">
                    <SiNaver />
                  </i>
                </div>
                <div className="bg-gray-600 text-white text-xs p-2 rounded-full mr-4 flex justify-center items-center">
                  <i className="fa">
                    <FaYoutube />
                  </i>
                </div>
              </div>
            </div>
            <div className="flex flex-col pr-3.5">
              {/* 회사소개 */}
              <div className="font-semibold mt-5 mb-5">회사소개</div>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                트립닷컴 소개
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                뉴스룸
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                채용
              </Link>
              <a
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                이용약관
              </a>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                개인정보 처리방침
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                트립닷컴 그룹 정보
              </Link>
            </div>
            <div className="flex flex-col pr-3.5">
              {/* 기타 서비스 */}
              <div className="font-semibold mt-5 mb-5">기타 서비스</div>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                IR
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                트릿닷컴 리워드
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                트릿닷컴 파트너제휴 플랫폼
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                호텔 등록
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                모든 호텔
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                액티비티 상품 제휴
              </Link>
              <Link
                to="/"
                className="no-underline pb-3.5 pt-1 text-base hover:text-blue-500 hover:underline"
              >
                보안
              </Link>
            </div>
            <div className="flex flex-col pr-3.5">
              {/* 결제 방법 */}
              <div className="font-semibold mt-5 mb-5">결제 방법</div>
              <img
                src={pay1}
                alt="pay1"
                className="w-12 h-15 border border-solid border-blue-900 rounded-md mt-5 text-center"
              />
              <img
                src={pay2}
                alt="pay2"
                className="w-12 h-15 border border-solid border-blue-900 rounded-md mt-5 text-center"
              />
              <img
                src={pay3}
                alt="pay3"
                className="w-12 h-15 border border-solid border-blue-900 rounded-md mt-5 text-center"
              />
              <img
                src={pay4}
                alt="pay4"
                className="w-12 h-15 border border-solid border-blue-900 rounded-md mt-5 text-center"
              />
            </div>
            <div className="flex flex-col pr-3.5">
              {/* 트립닷컴 제휴사 */}
              <div className="font-semibold mt-5 mb-5">트립닷컴 제휴사</div>
              <img
                src={affiliate1}
                alt="affiliate1"
                className="w-20 h-5 mt-3"
              />
              <img
                src={affiliate2}
                alt="affiliate2"
                className="w-20 h-5 mt-3"
              />
            </div>
          </div>
        </div>
        {/* 2번째 단락 */}
        <div className="flex justify-center border-t border-gray-300 text-base p-5 text-center">
          <div className="flex mx-20 items-center my-10">
            <img src={second1} alt="affiliate1" className="w-30 h-20 mr-4" />
            <span className="text-center">Contact Center of the year 2022</span>
          </div>
          <div className="flex mx-20 items-center">
            <img src={second2} alt="affiliate2" className="w-30 h-20 mr-4" />
            <span className="text-center">
              Google Material Design Awards 2019
            </span>
          </div>
        </div>
        {/* 3번째 단락 */}
        <div className="flex justify-center border-t border-gray-300 text-base p-5 text-center">
          <div className="mt-10">
            &copy; 2023 Trip.com Travel Singapore Pte. Ltd. All rights reserved.
            <br />
            사이트 운영자: Trip.com Travel Singapore Pte. Ltd. (라이선스 번호
            02943, 대표 오이치통)
            <br />
            1 Harbourfront Ave, /03-12/13, Keppel Bay Tower, Singapore(098632)
            <br />
            고객센터: 한국 1666 0060 해외 +82 2 6917 8777
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
