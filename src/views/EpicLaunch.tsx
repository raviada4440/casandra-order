'use client'

import { useEffect } from "react";

import { useLocation } from "react-use"
import { CircularProgress } from '@mui/material';
import { signIn } from "next-auth/react";

import { api } from '~trpc/react'

const EpicLaunch = () => {

  // Get the current location
  const location = useLocation()

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

      signIn('epic', undefined , { aud: fhirUrl as string, launch: launchToken as string, wellknownUrl:  fhirUrl + ".well-known/openid-configuration" as string}).then((res) => {
        if (res && res.ok && res.error === null) {

          console.log('res: ', res)
        } else {
          if (res?.error) {
            const error = JSON.parse(res.error)

            console.error('Error: ', error)
          }
        }

      })
    }
  }, [data, error, isLoading, launchToken]);

  return (<>
  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
  Epic Launch
  </>)

}

export default EpicLaunch
