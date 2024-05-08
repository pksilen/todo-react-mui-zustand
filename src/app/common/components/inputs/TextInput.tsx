import { TextField } from '@mui/material';

export type TextInputProps = {
  autoFocus?: boolean;
  className?: string;
  inputProps?: object;
  readonly label?: string;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
};

export const TextInput = ({
  autoFocus,
  className,
  inputProps,
  label,
  onChange,
  value
}: TextInputProps) => (
  <TextField
    autoFocus={autoFocus}
    className={className}
    InputProps={inputProps}
    fullWidth
    label={label}
    onChange={onChange}
    value={value}
    variant="standard"
  />
);
