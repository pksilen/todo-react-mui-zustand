import { List, Table, TableBody } from '@mui/material';
import { ReactNode } from 'react';
import { ViewType } from '../../../stores/viewControlsStore';

export default class TodosViewFactory {
  static createTodosView(viewType: ViewType, children: ReactNode) {
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
  }
}
