import { List, Table, TableBody } from '@mui/material';
import React from 'react';
import { ViewType } from '../../../stores/controls/controlsStore';

export const createTodosElement = (
  viewType: ViewType,
  children: React.ReactNode
) => {
  if (viewType === 'list') {
    return <List>{children}</List>;
  } else if (viewType === 'table') {
    return (
      <Table>
        <TableBody>{children}</TableBody>
      </Table>
    );
  }

  throw new Error('Unsupported view type');
};
