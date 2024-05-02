'use client'

import React, { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import type { BIOMARKER } from '~prisma/generated/zod';
import { api } from '~trpc/react';

interface AutocompleteBiomarkerProps {
  onValueChange: (value: BIOMARKER | null) => void
}

const AutocompleteBiomarker = (props: AutocompleteBiomarkerProps) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<BIOMARKER[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.testcatalog.getBiomaker.useQuery({ searchStr: inputValue });


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
      id="biomarker-autocomplete"
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
      getOptionLabel={(option) => `${option.HGNCId} | ${option.HGNCApprovedSymbol} | ${option.HGNCApprovedName}`}
      renderOption={(props, option: BIOMARKER, selected) => (
        <li {...props} key={option.HGNCId} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              {option.HGNCId}
            </Grid>
            <Grid item xs={3}>
              {option.HGNCApprovedSymbol}
            </Grid>
            <Grid item xs={3}>
              {option.HGNCApprovedName}
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
          label="Filter By Biomarker"
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

export default AutocompleteBiomarker;
