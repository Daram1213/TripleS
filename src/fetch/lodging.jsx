import axios from 'axios'

export const getLodgingData = (id) => {
  return axios
    .get(`http://15.165.25.34:3000/api/lodgings/${id}`)
    .then((response) => response)
}
