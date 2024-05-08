import { TextField } from '@mui/material';

export type TextInputProps = {
  className?: string;
  inputProps?: object;
  readonly label?: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
};

export const TextInput = ({ className, inputProps, label, onChange, value }: TextInputProps) => (
  <TextField
    className={className}
    InputProps={inputProps}
    fullWidth
    label={label}
    onChange={onChange}
    value={value}
    variant="standard"
  />
);
