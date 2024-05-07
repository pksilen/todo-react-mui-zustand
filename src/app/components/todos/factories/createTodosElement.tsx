import { List, Table, TableBody } from '@mui/material';
import React from 'react';
import { ViewType } from 'app/stores/controls/controlsStore';

export const createTodosElement = (viewType: ViewType, todoElements: React.ReactNode) => {
  if (viewType === 'list') {
    return <List>{todoElements}</List>;
  } else if (viewType === 'table') {
    return (
      <Table>
        <TableBody>{todoElements}</TableBody>
      </Table>
    );
  }

  throw new Error('Unsupported view type');
};
