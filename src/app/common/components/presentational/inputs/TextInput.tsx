import { TextField } from '@mui/material';

export type TextInputProps = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const TextInput = ({ label, onChange, value }: TextInputProps) => (
  <TextField fullWidth label={label} onChange={onChange} value={value} variant="standard" />
);
