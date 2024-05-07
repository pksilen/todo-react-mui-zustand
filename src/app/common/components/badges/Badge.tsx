import { Badge as MuiBadge, BadgeProps as MuiBadgeProps, styled } from '@mui/material';
import React from 'react';

const StyledBadge = styled(MuiBadge)<MuiBadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '16px',
    padding: '2px 4px',
    right: -3,
    top: 15
  }
}));

export type BadgeProps = {
  children: React.ReactNode;
  color: 'error';
  content: React.ReactNode;
};

export const Badge = ({ children, color, content }: BadgeProps) => (
  <StyledBadge badgeContent={content} color={color}>
    {children}
  </StyledBadge>
);
