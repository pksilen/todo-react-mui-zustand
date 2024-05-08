import { Typography } from '@mui/material';

export type Heading2Props = {
  readonly children: React.ReactNode;
};

export const Heading2 = ({ children }: Heading2Props) => (
  <Typography variant="h2">{children}</Typography>
);
