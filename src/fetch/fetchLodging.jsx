import axios from 'axios'

export const getLodgingData = (lodgingId) => {
  return axios
    .get(`http://15.165.25.34:3000/api/lodgings/${lodgingId}`) // URL 수정
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw new Error('호텔 상세 데이터 불러오는 과정에서 에러 발생')
    })
}

export const makeReservation = async (reservationData) => {
  console.log(reservationData)
  return axios
    .post('http://15.165.25.34:3000/api/orders', reservationData)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // Consider handling the error or re-throwing it if necessary
    })
}

export const getUser = async () => {
  try {
    function getCookie(name) {
      const cookieString = document.cookie
      const cookies = cookieString.split('; ')
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=')
        if (cookieName === name) {
          return decodeURIComponent(cookieValue)
        }
      }
      return null
    }

    function getAccessToken() {
      const accessTokenCookie = getCookie('accessToken') // 이전 예제에서 정의한 getCookie 함수 사용
      if (accessTokenCookie) {
        try {
          const accessTokenObject = JSON.parse(accessTokenCookie)
          if (accessTokenObject.token) {
            return accessTokenObject.token
          }
        } catch (error) {
          console.error('토큰 파싱 오류:', error)
        }
      }
      return null
    }

    // 'accessToken' 쿠키에서 토큰 값을 가져오기
    const accessTokenValue = getAccessToken()

    const response = await axios.get('http://15.165.25.34:3000/api/users', {
      headers: {
        Authorization: `Bearer ${accessTokenValue}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to fetch user data')
  }
}
