'use client'

// React Imports
import type { ChangeEvent} from 'react';
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import CircularProgress from '@mui/material/CircularProgress'


// Third-party Imports
import { signIn } from 'next-auth/react'
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { object, minLength, string, email } from 'valibot'
import type { SubmitHandler } from 'react-hook-form'
import type { Input } from 'valibot'

// Type Imports
import { Card, CardContent, Chip, Divider, Grid, useMediaQuery, useTheme } from '@mui/material'

import type { Mode } from '@core/types'
import type { Locale } from '@/configs/i18n'
import { useSettings } from '@core/hooks/useSettings'

// Component Imports
import Logo from '@core/svg/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'
import AutocompleteEndpoint from './AutocompleteEndpoint';


type ErrorType = {
  message: string[]
}

type FormData = Input<typeof schema>

const schema = object({
  email: string([minLength(1, 'This field is required'), email('Email is invalid')]),
  password: string([
    minLength(1, 'This field is required'),
    minLength(5, 'Password must be at least 5 characters long')
  ])
})

const Login = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [errorState, setErrorState] = useState<ErrorType | null>(null)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const { settings, updateSettings } = useSettings()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  console.log('mode', mode)

  // Hooks
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: valibotResolver(schema),

    defaultValues: {
      email: settings.loggedInEmail ?? '',
      password: ''
    }
  })


  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setLoading(true)

    if (rememberMe) {
      updateSettings({
        loggedInEmail: data.email,
      })
    } else {
      updateSettings({
        loggedInEmail: '',
      })
    }

    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if (res && res.ok && res.error === null) {
      setLoading(false)

      // Vars
      const redirectURL = searchParams.get('redirectTo') ?? '/'

      router.push(getLocalizedUrl(redirectURL, locale as Locale))
    } else {
      if (res?.error) {
        const error = JSON.parse(res.error)

        setErrorState(error)
      }
    }
  }

  const handleRememberMeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked)
  }

  return (
    <div className='flex flex-col justify-center items-center min-bs-[75dvh] relative p-6'>
      <Card className='flex flex-col'>
        <CardContent className='!p-12'>
          <div className='flex justify-center items-center gap-3 mbe-6'>
            <Logo className='text-primary' height={40} width={350} />
            {/* <Typography variant='h4' className='font-semibold tracking-[0.15px]'>
              {themeConfig.templateName}
            </Typography> */}
          </div>
          <Grid container>
            <Grid item xs={12} md={5}>
              <div className='flex flex-col gap-5'>
                <div>
                  {/* <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography> */}
                  <Typography className='mbs-1'>Please sign-in to your username & password, if not registered, please contact Casandra team</Typography>
                </div>
                <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        autoFocus
                        type='email'
                        label='Email'
                        onChange={e => {
                          field.onChange(e.target.value)
                          errorState !== null && setErrorState(null)
                        }}
                        {...((errors.email || errorState !== null) && {
                          error: true,
                          helperText: errors?.email?.message || errorState?.message[0]
                        })}
                      />
                    )}
                  />
                  <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label='Password'
                        id='login-password'
                        type={isPasswordShown ? 'text' : 'password'}
                        onChange={e => {
                          field.onChange(e.target.value)
                          errorState !== null && setErrorState(null)
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                edge='end'
                                onClick={handleClickShowPassword}
                                onMouseDown={e => e.preventDefault()}
                                aria-label='toggle password visibility'
                              >
                                <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        {...(errors.password && { error: true, helperText: errors.password.message })}
                      />
                    )}
                  />
                  <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
                    <FormControlLabel control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} />} label='Remember me' />
                    <Typography className='text-end' color='primary' component={Link} href='/forgot-password'>
                      Forgot password?
                    </Typography>
                  </div>
                  <Button fullWidth variant='contained' type='submit' className='gap-2'>
                    {loading && <CircularProgress size={20} color='inherit' />}
                    Log In
                  </Button>
                  {/* <div className='flex justify-center items-center flex-wrap gap-2'>
                    <Typography>New on our platform?</Typography>
                    <Typography component={Link} href='/register' color='primary'>
                      Create an account
                    </Typography>
                  </div> */}
                </form>
              </div>
            </Grid>
            <Grid item xs={12} md={1}>
              {matches ? (
                <Divider className="mt-4 mb-4">
                  <Chip label="OR" size="small" color="primary" />
                </Divider>
              ) : (
                <Divider orientation="vertical" variant="middle"  className="ml-4 mr-4 items-start items-center">
                  <Chip label="OR" size="small" color="primary"/>
                </Divider>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='flex flex-col gap-5'>
                <div>
                  {/* <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}!👋🏻`}</Typography> */}
                  <Typography className='mbs-1'>Please choose your organization and use Epic credentials to sign in</Typography>
                </div>
                <AutocompleteEndpoint />
                <Button
                  variant="outlined"
                  color='secondary'
                  className='self-center text-textPrimary'
                  startIcon={<img src='/images/pages/epic.png' alt='Google' width={45} />}
                  sx={{ '& .MuiButton-startIcon': { marginInlineEnd: 3 } }}
                  onClick={() => signIn('epic')}
                >
                  Sign in with my EPIC
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login



