import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';

export type SwitchProps = {
  readonly label: string;
  readonly onClick: () => void;
};

export const Switch = ({ label, onClick }: SwitchProps) => (
  <FormControlLabel control={<MuiSwitch onClick={onClick} />} label={label} />
);
