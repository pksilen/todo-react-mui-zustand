import { ListItem as MuiListItem } from '@mui/material';

export type ListItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const ListItem = ({ children, className }: ListItemProps) => (
  <MuiListItem className={className}>{children}</MuiListItem>
);
