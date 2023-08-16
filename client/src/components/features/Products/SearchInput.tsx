/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


type SearchInputProps = {
  handleSearch: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
};

export default function SearchInput({
  handleSearch,
}: SearchInputProps): JSX.Element {
  
  const products = useSelector((store: RootState) => store.products.products);

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={products.map((product) => product.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="искать на сайте"
            onChange={handleSearch}
          />
        )}
      />
    </Stack>
  );
}
