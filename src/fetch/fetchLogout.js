import axios from 'axios'

const fetchLogin = async () => {
  try {
    const response = await axios.delete('http://15.165.25.34:3000/api/logout', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log('response:', response.data)
    return response
  } catch (error) {
    return {
      error: 'Logout failed',
    }
  }
}

export default fetchLogin
