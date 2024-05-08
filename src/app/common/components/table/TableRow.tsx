import { TableRow as MuiTableRow } from '@mui/material';

export type TableRowProps = {
  children?: React.ReactNode;
};

export const TableRow = ({ children }: TableRowProps) => <MuiTableRow>{children}</MuiTableRow>;
