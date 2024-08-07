'use client'

import React, { useContext, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import type { Patient, PatientWithRelations } from '~prisma/generated/zod';
import { api } from '~trpc/react';
import { LabOrderContext } from '.';

const AutocompleteFhirPatient = () => {

  const { labOrder, setLabOrder } = useContext(LabOrderContext);
  const { data: session } = useSession()

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Patient[]>([]);
  const loading = open && options.length === 0;

  let listOid = ''

  if (session?.authType === 'oauth' && session?.authProvider === 'cerner') {
    listOid = 'urn:oid:1.2.840.114350.1.13.0.1.7.2.806567|5332'
  } else {
    listOid = 'urn:oid:1.2.840.114350.1.13.0.1.7.2.806567|5332'
  }

  const { data, error, isLoading } = api.fhir.getPatientList.useQuery({ fhirEndpoint: session?.fhirEndpoint as string, accessToken: session?.accessToken as string, listOid: listOid });

  const onPatientChange = (value: PatientWithRelations) => {
    // console.log('value', value)

    // Create a copy of labOrder
    const labOrderCopy = { ...labOrder }

    // delete all prior LabOrderIcd
    labOrderCopy.Patient = value;

    // Update the labOrder state
    setLabOrder(labOrderCopy)

  }


  useEffect(() => {
    if (error) {
      console.error(error);
    }

    if (isLoading) {
      return;
    }

    if (data) {
      setOptions(data);
    }
  }, [data, error, isLoading, session]);

  return (
    <Autocomplete
      className='flex flex-col sm:flex-row is-full'
      id="fhir-patient-autocomplete"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}

      // onInputChange={(event, newInputValue) => {
      //   setInputValue(newInputValue);
      // }}
      onChange={(event, newValue) => {
        onPatientChange(newValue as PatientWithRelations);
        setOpen(false);
      }}
      getOptionLabel={(option) => `${option.LastName}`}
      isOptionEqualToValue={(option, value) => option.Id === value.Id}
      renderOption={(props, option: Patient, selected) => (
        <li {...props} key={option.Id} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              {option.FirstName}
            </Grid>
            <Grid item xs={4}>
              {option.LastName}
            </Grid>
          </Grid>
        </li>
      )}
      options={options}
      loading={loading}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Patient List from Epic FHIR Server"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

export default AutocompleteFhirPatient;
