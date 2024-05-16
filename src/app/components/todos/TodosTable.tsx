import React from 'react';
import { Pending } from 'app/common/components/Pending';
import { Table } from 'app/common/components/table/Table';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/stores/todos/Todo';
import classes from './Todos.module.scss';
import { useTodos } from './hooks/useTodos';
import { TodoTableRow } from './todo/TodoTableRow';

export const TodosTable = () => {
  const { isPending, shownTodos } = useTodos();

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      <Table>
        {shownTodos.map((todo: Todo) => (
          <TodoTableRow key={todo.id} todo={todo} />
        ))}
      </Table>
    </Pending>
  );
};
