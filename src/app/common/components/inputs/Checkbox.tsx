import { Checkbox as MuiCheckbox } from '@mui/material';

export type CheckboxProps = {
  color: 'success';
  isChecked: boolean;
  onChange: () => void;
};

export const Checkbox = ({ color, isChecked, onChange }: CheckboxProps) => (
  <MuiCheckbox checked={isChecked} color={color} onChange={onChange} />
);
