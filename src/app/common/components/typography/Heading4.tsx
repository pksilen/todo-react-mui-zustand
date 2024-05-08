import { Typography } from '@mui/material';

export type Heading4Props = {
  readonly children: React.ReactNode;
};

export const Heading4 = ({ children }: Heading4Props) => (
  <Typography variant="h4">{children}</Typography>
);
