import React from 'react';
import { List } from 'app/common/components/list/List';
import { Table } from 'app/common/components/table/Table';
import { ViewType } from 'app/stores/controls/controlsStore';

export const createTodosElement = (viewType: ViewType, todoElements: React.ReactNode) => {
  if (viewType === 'list') {
    return <List>{todoElements}</List>;
  } else if (viewType === 'table') {
    return <Table>{todoElements}</Table>;
  }

  throw new Error('Unsupported view type');
};
