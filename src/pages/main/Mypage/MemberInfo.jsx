import { Button } from '@mui/base'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import fetchGetUserInfo from '../../../fetch/fetchGetUserInfo'
import fetchUpdateUser from '../../../fetch/fetchUpdateUser'

function createData(name, calories, fat) {
  return { name, calories, fat }
}

const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0)]

export default function MemberInfo() {
  const handleGetUserInfo = async (e) => {
    e.preventDefault()
    const result = await fetchGetUserInfo()

    if (result) {
      console.log(result.data)
    }
  }

  const handleUpdateUserInfo = async (e) => {
    e.preventDefault()
    const result = await fetchUpdateUser()

    if (result) {
      console.log(result.data)
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell align="right">이메일</TableCell>
              <TableCell align="right">이름</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleGetUserInfo}
        className="bg-blue-600 text-white mt-[2rem] rounded-md p-2 w-1/5"
      >
        조회
      </Button>
      <Button
        onClick={handleUpdateUserInfo}
        className="bg-blue-600 text-white ml-[1rem] mt-[2rem] rounded-md p-2 w-1/5"
      >
        수정
      </Button>
    </>
  )
}
