import axios from 'axios'

export const getLodgingData = (lodgingId) => {
  return axios
    .get('http://15.165.25.34:3000/api/lodgings', lodgingId)
    .then((response) => {
      console.log('API Response:', response)
      return response.data
    })
    .catch((error) => {
      console.error('API Error:', error)
      throw new Error('호텔 상세 데이터 불러오는 과정에서 에러 발생')
    })
}

export const makeReservation = async (reservationData) => {
  console.log(reservationData)
  return axios
    .post('http://15.165.25.34:3000/api/orders', reservationData)
    .then((response) => {
      console.log('API Response:', response)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getUser = async () => {
  try {
    const token = localStorage.getItem('login-token') // 로컬 스토리지에서 토큰 가져오기
    // 토큰이 유니코드 문자를 포함하고 있다면 인코딩을 수행합니다.
    const encodedToken = encodeURIComponent(token)
    const response = await axios.get('http://15.165.25.34:3000/api/users', {
      headers: {
        Authorization: `Bearer ${encodedToken}`, // 인코딩된 토큰을 헤더에 추가
      },
    })
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to fetch user data')
  }
}
