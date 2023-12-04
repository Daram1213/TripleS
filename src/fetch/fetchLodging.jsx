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
    const token = localStorage.getItem('login-token')
    const encodedToken = JSON.parse(token).data.token
    const response = await axios.get('http://15.165.25.34:3000/api/users', {
      headers: {
        Authorization: `Bearer ${encodedToken}`,
      },
    })
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to fetch user data')
  }
}