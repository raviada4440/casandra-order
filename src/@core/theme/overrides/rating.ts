// MUI Imports
import type { Theme } from '@mui/material/styles'

const rating: Theme['components'] = {
  MuiRating: {
    styleOverrides: {
      root: {
        color: 'var(--mui-palette-warning-main)',
        '& i, & svg': {
          flexShrink: 0
        }
      }
    }
  }
}

export default rating
