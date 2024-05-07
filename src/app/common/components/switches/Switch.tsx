import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';

export type SwitchProps = {
  label: string;
  onClick: () => void;
};

export const Switch = ({ label, onClick }: SwitchProps) => (
  <FormControlLabel control={<MuiSwitch onClick={onClick} />} label={label} />
);
