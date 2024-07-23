'use client'

import React, { useContext, useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress, Grid } from '@mui/material';

import { api } from '~trpc/react';
import { LabOrderContext } from '.';
import type { AddressType } from '@server/api/routers/address';
import type { LabOrderSpecimenWithRelations } from '~prisma/generated/zod';

const AutocompleteAddress = () => {

  const { labOrder, setLabOrder } = useContext(LabOrderContext);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<AddressType[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.address.getSmartyAddressList.useQuery({ searchStr: inputValue });

  const onAddressChange = (value: AddressType) => {
    // console.log('value', value)

    // Create a copy of labOrder
    const labOrderCopy = { ...labOrder }

    // delete all prior LabOrderIcd
    let labOrderSpecimenCopy = labOrderCopy.LabOrderSpecimen?.[0]

    if (!labOrderSpecimenCopy) {
      labOrderSpecimenCopy = {} as LabOrderSpecimenWithRelations
    }

    labOrderSpecimenCopy.PatientAddress1 = value.address1
    labOrderSpecimenCopy.PatientAddress2 = value.address2
    labOrderSpecimenCopy.PatientCity = value.city
    labOrderSpecimenCopy.PatientState = value.state
    labOrderSpecimenCopy.PatientZip = value.zip

    labOrderCopy.LabOrderSpecimen = [labOrderSpecimenCopy]

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
      fullWidth
      className='flex flex-col sm:flex-row is-full'
      id="address-autocomplete"
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
        onAddressChange(newValue as AddressType);
        setOpen(false);
      }}
      getOptionLabel={(option) => `${option.address1}`}
      isOptionEqualToValue={(option, value) => option.place_id === value.place_id}
      renderOption={(props, option: AddressType, selected) => (
        <li {...props} key={option.place_id} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              {option.address1}
            </Grid>
            <Grid item xs={3}>
              {option.city}
            </Grid>
            <Grid item xs={1}>
              {option.state_code}
            </Grid>
            <Grid item xs={2}>
              {option.zip}
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
          label="Search for an address"
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

export default AutocompleteAddress;
