import { TableCell as MuiTableCell } from '@mui/material';

export type TableCellProps = {
  children?: React.ReactNode;
  className?: string;
  onDoubleClick?: () => void;
};

export const TableCell = ({ children, className, onDoubleClick }: TableCellProps) => (
  <MuiTableCell className={className} onDoubleClick={onDoubleClick}>
    {children}
  </MuiTableCell>
);
