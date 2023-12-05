import axios from 'axios'

const fetchReservationList = async () => {
  try {
    const response = await axios.get(
      'http://15.165.25.34:3000/api/orders',
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data
  } catch (error) {
    throw new Error('fetchLocation Error')
  }
}

export default fetchReservationList
