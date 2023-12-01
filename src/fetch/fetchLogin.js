import axios from 'axios'

const fetchLogin = async (email, password) => {
  try {
    const result = axios.post(
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
    )
    return result.data
  } catch (error) {
    console.log('Login failed:', error)
    throw error
  }
}

export default fetchLogin
