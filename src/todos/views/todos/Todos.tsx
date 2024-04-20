import { Typography } from '@mui/material';
import useTodosStore from '../../model/todosStore';
import { Todo } from '../../model/Todo';
import classNames from './Todos.module.scss';
import { useEffect } from 'react';
import TodosViewFactory from './TodosViewFactory';
import useViewControlsStore from '../../model/viewControlsStore';

export default function Todos() {
  const { isLoading, lowerCaseTodoFilterText, shouldShowUndoneOnly, todos } =
    useTodosStore((store) => store);

  const { fetchTodos } = useTodosStore((store) => store.actions);
  const viewType = useViewControlsStore((store) => store.viewType);
  useEffect(() => fetchTodos, [fetchTodos]);

  const todoListItems = todos
    .filter(({ title }) =>
      title.toLowerCase().includes(lowerCaseTodoFilterText)
    )
    .filter(
      ({ isDone }) => (shouldShowUndoneOnly && !isDone) || !shouldShowUndoneOnly
    )
    .map((todo: Todo) => TodosViewFactory.createTodoView(viewType, todo));

  return (
    <div className={classNames.container}>
      {isLoading && <Typography variant="h4">Loading todos...</Typography>}
      {todos.length
        ? TodosViewFactory.createTodosView(viewType, todoListItems)
        : ''}
    </div>
  );
}
