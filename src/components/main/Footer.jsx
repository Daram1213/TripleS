import React from 'react'
<<<<<<< HEAD
import { Box, Typography } from '@mui/material'
=======
import { Box } from '@mui/material'
>>>>>>> 67041ae (Refactor: Footer.jsx 더미데이터 처리)

import FooterItem from './FooterItem'
import {
  CUSTOMER,
  COMPANY,
  SERVICE,
  PAYMENT,
} from '../../assets/dummyData/dummyDataFooter'

<<<<<<< HEAD
import second1 from '../../assets/FooterImg/second1.png'
import second2 from '../../assets/FooterImg/second2.png'
=======
// icon
// import { FaFacebookF, FaInstagram, SiNaver, FaYoutube } from 'react-icons/fa'

// FooterImg
// import pay1 from '../FooterImg/pay1.png'
// import pay2 from '../FooterImg/pay2.png'
// import pay3 from '../FooterImg/pay3.png'
// import pay4 from '../FooterImg/pay4.png'
// import affiliate1 from '../FooterImg/affiliate1.png'
// import affiliate2 from '../FooterImg/affiliate2.png'
import second1 from '../FooterImg/second1.png'
import second2 from '../FooterImg/second2.png'
>>>>>>> 67041ae (Refactor: Footer.jsx 더미데이터 처리)

function Footer() {
  return (
    <footer className="text-blue-950">
<<<<<<< HEAD
      <Box className="flex justify-center border-t text-sm gap-24 sm:px-8 px-5 py-16">
=======
      <Box className="flex justify-center border-t  text-sm 4 gap-24 sm:px-8 px-5 py-16">
>>>>>>> 67041ae (Refactor: Footer.jsx 더미데이터 처리)
        <FooterItem Links={CUSTOMER} title="고객문의" />
        <FooterItem Links={COMPANY} title="회사소개" />
        <FooterItem Links={SERVICE} title="기타 서비스" />
        <FooterItem Links={PAYMENT} title="결제 방법" />
      </Box>

<<<<<<< HEAD
      <Box className="flex justify-center border-t text-sm p-2 text-center">
        <Box className="flex mx-10 items-center my-5">
          <img src={second1} alt="affiliate1" className="w-9 h-9 mr-2" />
          <Typography className="text-center text-xs">
            Contact Center of the year 2022
          </Typography>
        </Box>
        <Box className="flex mx-10 items-center">
          <img src={second2} alt="affiliate2" className="w-23 h-10 mr-2" />
          <Typography className="text-center text-xs">
            Google Material Design Awards 2019
          </Typography>
=======
      <Box className="flex justify-center border-t text-sm p-3 text-center">
        <Box className="flex mx-10 items-center my-5">
          <img src={second1} alt="affiliate1" className="w-9 h-9 mr-2" />
          <span className="text-center text-xs">
            Contact Center of the year 2022
          </span>
        </Box>
        <Box className="flex mx-10 items-center">
          <img src={second2} alt="affiliate2" className="w-23 h-10 mr-2" />
          <span className="text-center text-xs">
            Google Material Design Awards 2019
          </span>
>>>>>>> 67041ae (Refactor: Footer.jsx 더미데이터 처리)
        </Box>
      </Box>

      <Box className="flex justify-center border-t text-sm p-3 text-center">
        <Box className="mt-5 mb-5">
          &copy; 2023 TripleS.com Travel Republic of Korea Pte. Ltd. All rights
          reserved.
          <br />
          사이트 운영자: TripleS.com Travel Republic of Korea Pte. Ltd.
          (라이선스 번호 1234567, 대표 TripleS)
          <br />
          고객센터: 한국 02 1234 해외 +82 1234 1234
        </Box>
      </Box>
    </footer>
  )
}

export default Footer
