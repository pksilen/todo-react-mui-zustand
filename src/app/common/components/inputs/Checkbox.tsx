import { Checkbox as MuiCheckbox } from '@mui/material';

type Props = {
  readonly color: 'success';
  readonly isChecked: boolean;
  readonly onChange: () => void;
};

export const Checkbox = ({ color, isChecked, onChange }: Props) => (
  <MuiCheckbox checked={isChecked} color={color} onChange={onChange} />
);
