'use client'

import React, { useContext, useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import type { Provider, ProviderWithRelations } from '~prisma/generated/zod';
import { api } from '~trpc/react';
import { LabOrderContext } from '.';

const AutocompleteProvider = () => {

  const { labOrder, setLabOrder } = useContext(LabOrderContext);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Provider[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.laborders.getProviders.useQuery({ searchStr: inputValue });

  const onProviderChange = (value: ProviderWithRelations) => {
    console.log('value', value)

    // Create a copy of labOrder
    const labOrderCopy = { ...labOrder }

    // delete all prior LabOrderIcd
    labOrderCopy.TreatingProvider = value;

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
  }, [data, error, isLoading]);

  return (
    <Autocomplete
      className='flex flex-col sm:flex-row is-full'
      id="providers-autocomplete"
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
        onProviderChange(newValue as ProviderWithRelations);
        setOpen(false);
      }}
      getOptionLabel={(option) => `${option.Name}`}
      isOptionEqualToValue={(option, value) => option.Id === value.Id}
      renderOption={(props, option: Provider, selected) => (
        <li {...props}  key={option.Id} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              {option.Name}
            </Grid>
            <Grid item xs={2}>
              {option.Credentials}
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
          label="Treating Physician"
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

export default AutocompleteProvider;
