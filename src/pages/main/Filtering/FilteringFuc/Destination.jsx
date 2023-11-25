import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { styled, lighten, darken } from '@mui/system'
import { FormControl } from '@mui/base'
import { InputLabel, List } from '@mui/material'
// import { FilteringApi } from '../FilteringApi'

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}))

const GroupItems = styled('ul')({
  padding: 0,
})

// dummyData test
const topContent = [
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
]

export default function RenderGroup() {
  // const [apiData, setAPIData] = useState(null)

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await FilteringApi() // API 호출 함수 실행
  //       setAPIData(data) // 받은 데이터 상태 업데이트
  //       console.log('apiData:', apiData)
  //     } catch (error) {
  //       console.log('에러')
  //     }
  //   }
  //   getData()
  // }, [])

  const options = topContent.map((item) => {
    const firstLetter = item.title[0].toUpperCase()
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...item,
    }
  })

  return (
    <Autocomplete
      style={{ width: '85%' }}
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <FormControl>
          <InputLabel htmlFor="travel-destination">여행지</InputLabel>
          <TextField
            {...params}
            id="travel-destination"
            placeholder="도시, 공항, 지역, 랜드마크, 호텔 이름으로 검색"
          />
        </FormControl>
      )}
      renderGroup={(params) => (
        <List key={params.key}>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </List>
      )}
    />
  )
}
