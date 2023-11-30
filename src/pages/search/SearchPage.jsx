import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import SearchCard from '../../components/search/SearchCard'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import fetchSearchHotel from '../../fetch/fetchSearchHotel'

function SearchPage() {
  // 검색어 useParams로 가져오기 e.g. 서울, 종로, 일본
  const { keyword } = useParams()
  // 한 페이지에 불러 올 아이템 수
  const items = 1
  const page = 1
  const [attractions, setAttractions] = useState([])
  const [hotels, setHotels] = useState([])

  const hotelRes = useQuery({
    queryKey: {
      type: 'hotels',
      keyword,
      items,
      page,
    },
    queryFn: fetchSearchHotel,
  })
  const attractionRes = useQuery({
    queryKey: {
      type: 'attractions',
      keyword,
      items,
      page,
    },
    queryFn: fetchSearchTour,
  })

  // 위의 데이터에서 필요한 값 가져옴
  const hotelData = hotelRes?.data?.lodging
  const attractionData = attractionRes?.data?.attraction

  useEffect(() => {
    if (!hotelRes.isLoading && hotelData) {
      setHotels(() => [...hotelData])
    }
  }, [hotelData, hotelRes.isLoading])

  useEffect(() => {
    if (!attractionRes.isLoading && attractionData) {
      setAttractions(() => [...attractionData])
    }
  }, [attractionData, attractionRes.isLoading])
  return (
    <SearchCard hotels={hotels} attractions={attractions} keyword={keyword} />
  )
}

export default SearchPage
