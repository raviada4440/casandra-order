'use client'

import React, { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Chip, CircularProgress, Grid } from '@mui/material';

import type { ICD, LabOrderCptWithRelations } from '~prisma/generated/zod';
import { api } from '~trpc/react';

// import { LabOrderContext } from '..';

type AutocompleteIcdProps = {
  cptRecord: LabOrderCptWithRelations;
  onUpdateFormData: (updatedRecord: LabOrderCptWithRelations) => void;
};


const AutocompleteIcd = ({ cptRecord, onUpdateFormData }: AutocompleteIcdProps) => {

  // const { labOrder, setLabOrder } = useContext(LabOrderContext);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<ICD[]>([]);
  const loading = open && options.length === 0;

  const [inputValue, setInputValue] = useState('');

  const { data, error, isLoading } = api.laborders.getIcdCodes.useQuery({ searchStr: inputValue })

  const onIcdChange = (values: ICD[]) => {

    // const icdCodesString = values.map(value => value.Code).join(', ')
    const icdCodesJsonArray = JSON.stringify(values);

    const updatedRecord: LabOrderCptWithRelations = { ...cptRecord }

    updatedRecord.ICDCodes  = icdCodesJsonArray

    console.log('updatedRecord - AutocompleteIcd: ', updatedRecord)

    onUpdateFormData(updatedRecord);
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
      value={cptRecord.ICDCodes ? JSON.parse(cptRecord.ICDCodes as string) : []}
      onChange={(event, newValue) => {
        onIcdChange(newValue as ICD[]);
        setOpen(false);
      }}
      isOptionEqualToValue={(option: ICD, value: ICD) => option.Code === value.Code}
      getOptionLabel={(option: string | ICD) => typeof option === 'string' ? option : option.Code || ''}
      renderTags={(value: ICD[], getTagProps) =>
        value.map((option: ICD, index: number) => (
          <Chip label={option.Code} size='small' {...(getTagProps({ index }) as {})} key={option.Id} />
        ))
      }
      renderOption={(props, option: ICD, selected) => (
        <li {...props} key={option.Id} style={{ backgroundColor: selected ? '#fff' : '#ddd' }}>
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
