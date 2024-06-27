'use client'

import { useEffect, useState } from "react";

import { useLocation } from "react-use"
import { Box, Card, CardActionArea, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material';
import { signIn } from "next-auth/react";

import { api } from '~trpc/react'

const EpicLaunch = () => {

  // Get the current location
  const location = useLocation()
  const [progress, setProgress] = useState<number>(0)

  console.log('location: ', location.search)

  // Parse the query parameters
  const queryParams = new URLSearchParams(location.search)

  // Get a specific query parameter
  const iss = queryParams.get('iss')
  const launchToken = queryParams.get('launch')

  console.log('iss: ', iss)
  console.log('launch: ', launchToken)

  const { data, error, isLoading } = api.directory.getOrgFHIREndpointByISS.useQuery({ issuer: iss+'/' || ''});

  console.log('data: ', data)

  useEffect(() => {
    if(data && data.length > 0) {
      const fhirUrl = data[0].Endpoint

      const timer = setInterval(() => {
          setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }

          const diff = Math.random() * 10;

          return Math.min(oldProgress + diff, 100);
        })
      }, 500);

      signIn('epic', undefined , { aud: fhirUrl as string, launch: launchToken as string, wellknownUrl:  fhirUrl + ".well-known/openid-configuration" as string}).then((res) => {
        if (res && res.ok && res.error === null) {

          console.log('res: ', res)
        } else {
          if (res?.error) {
            const error = JSON.parse(res.error)

            console.error('Error: ', error)
          }
        }

        setProgress(100)
        clearInterval(timer);
      })
    }
  }, [data, error, isLoading, launchToken]);

  return (
    <div className='flex flex-col justify-center items-center min-bs-[75dvh] relative p-6'>

    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          image="/images/pages/epic-casandra.png"
          alt="Epic Launch"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Authenticating
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Epic user is being authenticated and authorized. Please wait...
          </Typography>
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )

}

export default EpicLaunch
