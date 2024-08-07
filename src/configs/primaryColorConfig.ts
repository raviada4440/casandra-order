export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#004A97',
    main: '#004A97',
    dark: '#004A97'
  },
  {
    name: 'primary-2',
    light: '#ba68c8',
    main: '#9c27b0',
    dark: '#7b1fa2'
  },
  {
    name: 'primary-3',
    light: '#ef5350',
    main: '#d32f2f',
    dark: '#c62828'
  },
  {
    name: 'primary-4',
    light: '#ff9800',
    main: '#ed6c02',
    dark: '#e65100'
  },
  {
    name: 'primary-5',
    light: '#4caf50',
    main: '#2e7d32',
    dark: '#1b5e20'
  }
]

export default primaryColorConfig
