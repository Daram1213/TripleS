import { createTheme } from '@mui/material/styles'
import { defaultTheme } from '@mui/material'
import { typography } from '@tailwindcss/typography'
import { forms } from '@tailwindcss/forms'

const theme = createTheme({
  ...defaultTheme,
  typography: typography(),
  forms: forms(),
})

export default theme
