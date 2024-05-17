'use client'

import React, { useContext, useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Chip, CircularProgress, Grid  } from '@mui/material';

import type { ICD, ICDWithRelations, LabOrderIcdWithRelations } from '~prisma/generated/zod';
import { api } from '~trpc/react';
import { LabOrderContext } from '.';

const AutocompleteIcd = () => {

  const { labOrder, setLabOrder } = useContext(LabOrderContext);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ICD[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.laborders.getIcdCodes.useQuery({ searchStr: inputValue })

  const onIcdChange = (values: ICD[]) => {
    console.log('value', values)

    // Create a copy of labOrder
    const labOrderCopy = { ...labOrder }

    // If values is empty, set LabOrderIcd to an empty array
    if (values.length === 0) {
      labOrderCopy.LabOrderIcd = [];
    } else {
        // Check if LabOrderIcd property exists in labOrder
        if (!labOrderCopy.LabOrderIcd) {
          // If it doesn't exist, assign an empty array of LabOrderIcdWithRelations type
          labOrderCopy.LabOrderIcd = [];
        }

        // For each value in values array
        values.forEach((value) => {

        // Check if the ICD already exists in the LabOrderIcd array
        const exists = labOrderCopy.LabOrderIcd.some((labOrderIcd) => labOrderIcd && labOrderIcd.ICD ? labOrderIcd.ICD.Code === value.Code : false);

        if (!exists) {

            // Create an object of type LabOrderIcdWithRelations
            const newLabOrderIcdEntry: LabOrderIcdWithRelations = {
              Id: '',
              CreatedAt: null,
              UpdatedAt: null,
              LabOrderId: null,
              ICDId: null,
              ICD: value as ICDWithRelations
            }

            // Push the new object to the LabOrderIcd array
            labOrderCopy.LabOrderIcd.push(newLabOrderIcdEntry)
          }
        })
    }

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

  }, [data, labOrder, error, isLoading]);

  return (
    <Autocomplete
      id="icd-autocomplete"
      multiple
      filterSelectedOptions
      freeSolo
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
        onIcdChange(newValue as ICD[]);
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.Id === value.Id}
      getOptionLabel={(option: string | ICD) => typeof option === 'string' ? option : option.Code || ''}
      renderTags={(value: ICD[], getTagProps) =>
        value.map((option: ICD, index: number) => (
          <Chip label={option.Code} size='small' {...(getTagProps({ index }) as {})} key={option.Id} />
        ))
      }
      renderOption={(props, option: ICD, selected) => (
        <li {...props} key={option.Id}  style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
          <Grid key={option.Id} container alignItems="center">
            <Grid item xs={3}>
              {option.Code}
            </Grid>
            <Grid item xs={9}>
              {option.ShortDescription}
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
          label="Filter By ICD Code or Description"
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

export default AutocompleteIcd;
