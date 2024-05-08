import { IconButton as MuiIconButton } from '@mui/material';
import React from 'react';

export type IconButtonProps = {
  readonly className?: string;
  readonly icon: React.ReactNode;
  readonly onClick?: () => void;
};

export const IconButton = ({ className, icon, onClick }: IconButtonProps) => (
  <MuiIconButton className={className} onClick={onClick}>
    {icon}
  </MuiIconButton>
);
