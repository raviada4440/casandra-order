'use client'

import React, { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import type { Lab } from '~prisma/generated/zod';
import { api } from '~trpc/react';

interface AutocompleteLabProps {
  onValueChange: (value: Lab | null) => void
}

const AutocompleteLab = (props: AutocompleteLabProps) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Lab[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.testcatalog.searchLabs.useQuery({ searchStr: inputValue });


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
      className='flex flex-col sm:flex-row is-full min-is-[800px]'
      size='small'
      id="lab-autocomplete"
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
        props.onValueChange(newValue);
        setOpen(false);
      }}
      getOptionLabel={(option) => `${option.LabName}`}
      isOptionEqualToValue={(option, value) => option.LabId === value.LabId}
      renderOption={(props, option: Lab, selected) => (
        <li {...props}  key={option.LabId} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              {option.LabName}
            </Grid>
            <Grid item xs={2}>
              {option.City}
            </Grid>
            <Grid item xs={2}>
              {option.State}
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
          label="Filter By Lab"
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

export default AutocompleteLab;
