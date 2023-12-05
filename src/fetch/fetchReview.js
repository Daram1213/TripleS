import axios from 'axios'

const fetchReview = async () => {
  try {
    const response = await fetch('http://15.165.25.34:3000/api/lodgings/1')
    const data = await response.json()
  } catch (error) {
    console.error('리뷰 호출 중 에러 발생', error)
  }
}

export default fetchReview
