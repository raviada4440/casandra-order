// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const TwoStepVerification = () => {
  return (
    <Card>
      <CardHeader title='Two-step verification' subheader='Keep your account secure with authentication step.' />
      <CardContent>
        <Typography htmlFor='sms' component={InputLabel} className='inline-flex font-medium mbe-1' color='text.primary'>
          SMS
        </Typography>
        <div className='flex items-center mbe-4 gap-5'>
          <TextField id='sms' placeholder='+1(968) 819-2547' fullWidth size='small' />
          <div className='flex items-center gap-2'>
            <Button variant='outlined' color='secondary' className='p-1.5 bs-[38px] is-[38px] min-is-0'>
              <i className='ri-edit-box-line' />
            </Button>
            <Button variant='outlined' color='secondary' className='p-1.5 bs-[38px] is-[38px] min-is-0'>
              <i className='ri-user-add-line' />
            </Button>
          </div>
        </div>
        <Typography>
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a
          password to log in. <span className='text-primary'>Learn more.</span>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TwoStepVerification
