// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

// import Chip from '@mui/material/Chip'

// import Typography from '@mui/material/Typography'

// // Type Imports
// import type { ThemeColor } from '@core/types'

// Components Imports
// import OptionMenu from '@core/components/option-menu'
// import CustomAvatar from '@core/components/mui/Avatar'

// type DataType = {
//   avatarSrc: string
//   title: string
//   subtitle: string
//   chipLabel: string
//   chipColor?: ThemeColor
// }

const MeetingSchedule = () => {
  return (
    <Card>
      <CardHeader
        title='Order Lab Tests'
        className='flex text-center justify-between'
      />
      <CardMedia image='/images/cards/smart-app.png' className='m-2 bs-[280px]' />
      <CardContent>
        <Button
          variant='contained'
          color='primary'
          endIcon={<i className='ri-external-link-line text-xl' />}
          fullWidth
        >
          SMART On FHIR App
        </Button>
      </CardContent>
    </Card>
  )
}

export default MeetingSchedule
