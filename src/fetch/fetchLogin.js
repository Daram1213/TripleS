import axios from 'axios'

const fetchLogin = async (email, password) => {
  try {
    const response = await axios.post(
      'http://15.165.25.34:3000/api/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
      { withCredentials: true },
    )
    return response
  } catch (error) {
    throw new Error('fetchLogin Error')
  }
}

export default fetchLogin
