'use client'

import React, { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import type { LOINC } from '~prisma/generated/zod';
import { api } from '~trpc/react';

interface AutocompleteLoincProps {
  onValueChange: (value: LOINC | null) => void
}

const AutocompleteLoinc = (props: AutocompleteLoincProps) => {

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<LOINC[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.testcatalog.getLoincCodes.useQuery({ searchStr: inputValue });


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
      id="loinc-autocomplete"
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
      getOptionLabel={(option) => `${option.Loinc_Num} | ${option.COMPONENT}`}
      renderOption={(props, option: LOINC, selected) => (
        <li {...props} key={option.Loinc_Num}  style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={3}>
              {option.Loinc_Num}
            </Grid>
            <Grid item xs={3}>
              {option.COMPONENT}
            </Grid>
            <Grid item xs={3}>
              {option.COMMON_TEST_RANK}
            </Grid>
            <Grid item xs={3}>
              {option.COMMON_ORDER_RANK}
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
          label="Filter By Loinc"
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

export default AutocompleteLoinc;
