const fetchHotel = async ({ queryKey }) => {
  const searchWord = queryKey[1]
  const type = 'hotel'
  const page = queryKey[2] ?? 1

  const apiRes = await fetch(
    `http://주소.com/api?search=${searchWord}&type=${type}&page=${page}`,
  )

  if (!apiRes.ok) {
    throw new Error(`${searchWord} 에 관한 호텔 검색결과가 없습니다.`)
  }

  return apiRes.json()
}

export default fetchHotel
