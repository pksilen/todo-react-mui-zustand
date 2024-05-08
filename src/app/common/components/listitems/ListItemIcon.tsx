import { ListItemIcon as MuiListItemIcon } from '@mui/material';

export type ListItemIconProps = {
  icon: React.ReactNode;
};

export const ListItemIcon = ({ icon }: ListItemIconProps) => (
  <MuiListItemIcon>{icon}</MuiListItemIcon>
);
