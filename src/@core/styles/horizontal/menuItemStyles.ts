// MUI Imports
import { lighten } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { MenuItemStyles } from '@menu/types'
import type { Settings } from '@core/contexts/settingsContext'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

const menuItemStyles = (settings: Settings, theme: Theme): MenuItemStyles => ({
  root: ({ level }) => ({
    ...(level === 0 && {
      borderRadius: 50
    }),
    [`&.${menuClasses.open} > .${menuClasses.button}`]: {
      backgroundColor: 'var(--mui-palette-action-selected) !important'
    },
    ...(level === 0
      ? {
          [`& .${menuClasses.button}.${menuClasses.active}`]: {
            background:
              theme.direction === 'ltr'
                ? `linear-gradient(270deg, var(--mui-palette-primary-main), ${lighten(
                    theme.palette.primary.main,
                    0.5
                  )} 100%)`
                : `linear-gradient(270deg, ${lighten(
                    theme.palette.primary.main,
                    0.5
                  )}, var(--mui-palette-primary-main) 100%)`
          }
        }
      : {
          [`&:not([aria-expanded]) > .${menuClasses.button}.${menuClasses.active}`]: {
            backgroundColor: 'var(--mui-palette-primary-lightOpacity)',
            color: 'var(--mui-palette-primary-main)'
          },
          [`&[aria-expanded] > .${menuClasses.button}.${menuClasses.active}`]: {
            backgroundColor: 'var(--mui-palette-action-selected) !important'
          }
        }),
    [`&.${menuClasses.disabled} > .${menuClasses.button}`]: {
      color: 'var(--mui-palette-text-disabled)',
      '& *': {
        color: 'inherit'
      }
    }
  }),
  button: {
    paddingInline: theme.spacing(4),
    '&:not(:has(.MuiChip-root))': {
      paddingBlock: theme.spacing(2)
    },
    '&:has(.MuiChip-root)': {
      paddingBlock: theme.spacing(1.75)
    },
    [`&:not(.${menuClasses.active}):hover, &:not(.${menuClasses.active}):focus-visible, &:not(.${menuClasses.active})[aria-expanded="true"]`]:
      {
        backgroundColor: 'var(--mui-palette-action-hover)'
      }
  },
  icon: ({ level }) => ({
    marginInlineEnd: theme.spacing(2),
    ...(level < 2 ? { fontSize: '1.375rem' } : { fontSize: '0.75rem', color: 'var(--mui-palette-text-secondary)' }),
    '& > i, & > svg': {
      fontSize: 'inherit'
    },
    '& .ri-circle-line': {
      fontSize: '0.75rem',
      color: 'var(--mui-palette-text-secondary)',
      [`.${menuClasses.active} &`]: {
        color: 'var(--mui-palette-primary-main)'
      }
    }
  }),
  prefix: {
    marginInlineEnd: theme.spacing(2)
  },
  suffix: {
    marginInlineStart: theme.spacing(2)
  },
  subMenuStyles: {
    zIndex: 'calc(var(--header-z-index) + 1)'
  },
  subMenuExpandIcon: {
    fontSize: '1.375rem',
    marginInlineStart: theme.spacing(2),
    '& i, & svg': {
      fontSize: 'inherit'
    }
  },
  subMenuContent: {
    backgroundColor: 'var(--mui-palette-background-paper)',
    ...(settings.skin === 'bordered'
      ? {
          boxShadow: 'none',
          border: '1px solid var(--mui-palette-divider)'
        }
      : {
          boxShadow: 'var(--mui-customShadows-lg)'
        }),
    '& > ul, & > div > ul': {
      paddingBlock: theme.spacing(2)
    }
  }
})

export default menuItemStyles
