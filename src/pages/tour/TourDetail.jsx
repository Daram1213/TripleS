import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Box } from '@mui/system'
import fetchSearchTour from '../../fetch/fetchSearchTour'
import fetchTourDetail from '../../fetch/fetchTourDetail'
import TourMap from '../../components/tour/TourMap'
import TourPhoto from '../../components/tour/TourPhoto'
import TourDetailCard from '../../components/tour/tourDetailCard'

function TourDetail() {
  const { tourId } = useParams()
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
    () => (mainAttraction?.address ? mainAttraction.address.split(' ')[0] : ''),
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

  return (
    <Box>
      <Box className="flex w-[68rem] p-3 gap-3">
        <TourDetailCard
          attractionName={mainAttraction.name}
          attractionDescription={mainAttraction.description}
        />
        <TourPhoto images={mainAttraction.image} />
      </Box>
      <TourMap mainAttraction={mainAttraction} attractions={attractions} />
    </Box>
  )
}

export default TourDetail
