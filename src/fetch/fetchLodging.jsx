import axios from 'axios'

export const getLodgingData = (lodgingId) => {
  console.log('Requesting data for lodgingId:', lodgingId)
  return axios
    .get(`http://15.165.25.34:3000/api/lodgings/${lodgingId}`) // URL 수정
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
    const token = localStorage.getItem('login-token')
    const encodedToken = JSON.parse(token).data.token
    console.log(encodedToken)
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
