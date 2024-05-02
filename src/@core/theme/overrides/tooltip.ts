// MUI Imports
import type { Theme } from '@mui/material/styles'

const tooltip: Theme['components'] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        borderRadius: 'var(--mui-shape-customBorderRadius-sm)',
        fontSize: theme.typography.subtitle2.fontSize,
        lineHeight: 1.539,
        color: 'var(--mui-palette-customColors-tooltipText)',
        paddingInline: theme.spacing(3)
      })
    }
  }
}

export default tooltip
