import Box from '@mui/material/Box'
import { Link } from '@mui/material'

function HeaderLogo() {
  return (
    <Box className="main-hd-logo-icon p-4 float-left">
      <Link
        underline="none"
        sx={{
          display: 'contents',
          color: 'white',
          width: '8rem',
          height: '2rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
        href="/"
      >
        TripleS
      </Link>
    </Box>
  )
}

export default HeaderLogo
