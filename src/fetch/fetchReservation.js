import axios from 'axios'

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
  const accessTokenCookie = getCookie('accessToken')
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

const accessTokenValue = getAccessToken()

const fetchReservation = async () => {
  try {
    const response = await axios.get('http://15.165.25.34:3000/api/orders', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessTokenValue}`,
      },
    })
    return response.data
  } catch (error) {
    throw new Error('fetchReservation Error')
  }
}

export default fetchReservation
