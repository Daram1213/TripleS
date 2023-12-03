import axios from 'axios'

const fetchLocation = async () => {
  try {
    const response = await axios.get('http://15.165.25.34:3000/api/location', {
      map: {
        latitude: 37.5665,
        longitude: 126.978,
      },
      review: [],
      _id: '65665b151f3d0e674c67474b',
      locationId: 1,
      country: '대한민국',
      city: '서울',
      airport: '65665cdd65d9065a5de583d4',
      image: ['image1'],
    })
    console.log(response.data)
    return response
  } catch (error) {
    return {
      error: 'fetchLocation failed',
    }
  }
}

export default fetchLocation
