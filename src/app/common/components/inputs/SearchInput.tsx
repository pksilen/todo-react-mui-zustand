import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';

export type SearchInputProps = {
  readonly className: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly placeholder: string;
};

export const SearchInput = ({ className, onChange, placeholder }: SearchInputProps) => (
  <TextField
    className={className}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      )
    }}
    onChange={onChange}
    placeholder={placeholder}
    variant="standard"
  />
);
