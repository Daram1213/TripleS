import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/system'
import SearchCard from '../../components/search/SearchCard'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import fetchSearchHotel from '../../fetch/fetchSearchHotel'
import fetchTourDetail from '../../fetch/fetchTourDetail'
import TourMap from '../../components/tour/TourMap'

function TourDetail() {
  // const { tourId } = useParams()
  const tourId = 1
  let mainAttraction = {}
  let attractions = []

  const items = 10
  const page = 1

  const mainAttractionRes = useQuery({
    queryKey: {
      type: 'mainAttraction',
      id: tourId,
    },
    queryFn: fetchTourDetail,
  })

  mainAttraction = useMemo(() => {
    if (!mainAttractionRes.isLoading) {
      return mainAttractionRes?.data
    }
    return {}
  }, [mainAttractionRes.isLoading, mainAttractionRes?.data])

  const city = useMemo(
    // () => (mainAttraction?.address ? mainAttraction.address.split(' ')[0] : ''),
    () => (mainAttraction?.address ? '서울' : ''),
    [mainAttraction],
  )

  const attractionRes = useQuery({
    queryKey: {
      type: 'attractions',
      keyword: city,
      items,
      page,
    },
    queryFn: fetchSearchTour,
  })
  const attractionData = attractionRes?.data?.attraction

  attractions = useMemo(() => {
    if (!attractionRes.isLoading && attractionData) {
      return [...attractions, ...attractionData]
    }
    return [...attractions]
  }, [attractions, attractionData, attractionRes.isLoading])

  return <TourMap mainAttraction={mainAttraction} attractions={attractions} />
}

export default TourDetail
