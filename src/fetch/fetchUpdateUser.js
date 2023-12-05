import axios from 'axios'

function getCookie(name) {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1)
    }
  }
  return null
}

const fetchUpdateUser = async (email, password, name) => {
  try {
    const accessToken = getCookie('accessToken')
    if (!accessToken) {
      console.log('accessToken is not available')
      return null
    }
    const accessTokenObject = JSON.parse(accessToken)
    const tokenValue = accessTokenObject.token
    console.log('tokenValue', tokenValue)
    const response = await axios.put(
      'http://15.165.25.34:3000/api/users',
      {
        email,
        password,
        name,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenValue}`,
        },
      },
    )
    console.log(response)
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    throw new Error('Failed to fetch user data')
  }
}

export default fetchUpdateUser
