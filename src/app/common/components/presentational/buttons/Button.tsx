import { Button as MuiButton } from '@mui/material';
import React from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick: () => void;
};

export const Button = ({ children, className, onClick }: ButtonProps) => (
  <MuiButton
    color="primary"
    onClick={onClick}
    variant="contained"
    sx={{ flexShrink: 0, marginLeft: '25px' }}
  >
    {children}
  </MuiButton>
);
