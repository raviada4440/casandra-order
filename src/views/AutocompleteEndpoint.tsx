'use client'

import React, { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import type { OrganizationEndpoint } from '~prisma/generated/zod';
import { api } from '~trpc/react';
import { useSettings } from '@core/hooks/useSettings';

const AutocompleteEndpoint = () => {

  const { updateSettings } = useSettings()

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<OrganizationEndpoint[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.directory.getFHIREndpoints.useQuery({ searchStr: inputValue });

  const onProviderChange = (value: OrganizationEndpoint) => {
    console.log('value', value)

    // Update the labOrder state
    updateSettings({selectedEndpoint: value})

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
  }, [data, error, isLoading]);

  return (
    <Autocomplete
      className='flex flex-col sm:flex-row is-full'
      id="endpoint-autocomplete"
      fullWidth
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue) => {
        onProviderChange(newValue as OrganizationEndpoint);
        setOpen(false);
      }}
      getOptionLabel={(option) => `${option.OrgName}`}
      isOptionEqualToValue={(option, value) => option.Id === value.Id}
      renderOption={(props, option: OrganizationEndpoint, selected) => (
        <li {...props}  key={option.Id} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              {option.OrgName}
            </Grid>
            {/* <Grid item xs={2}>
              {option.FHIRVersion}
            </Grid> */}
          </Grid>
        </li>
      )}
      options={options}
      loading={loading}
      filterOptions={(x) => x}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for FHIR Endpoint"
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

export default AutocompleteEndpoint;
