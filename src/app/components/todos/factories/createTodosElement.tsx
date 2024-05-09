import React from 'react';
import { ViewType } from 'app/stores/controls/controlsStore';
import { List } from '../../../common/components/list/List';
import { Table } from '../../../common/components/table/Table';

export const createTodosElement = (viewType: ViewType, todoElements: React.ReactNode) => {
  if (viewType === 'list') {
    return <List>{todoElements}</List>;
  } else if (viewType === 'table') {
    return <Table>{todoElements}</Table>;
  }

  throw new Error('Unsupported view type');
};
