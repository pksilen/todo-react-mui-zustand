import { Typography } from '@mui/material';
import useTodosStore from '../../stores/todosStore';
import { Todo } from '../../stores/Todo';
import classNames from './Todos.module.scss';
import TodosViewFactory from './TodosViewFactory';
import useViewControlsStore from '../../stores/viewControlsStore';
import { afterMount } from '../../../utils/utils';
import TodoViewFactory from './TodoViewFactory';

export default function Todos() {
  const { isLoading, lowerCaseTodoFilterText, shouldShowUndoneOnly, todos } =
    useTodosStore((store) => store);

  const { fetchTodos } = useTodosStore((store) => store.actions);
  const viewType = useViewControlsStore((store) => store.viewType);
  afterMount(fetchTodos);

  const todoListItems = todos
    .filter(({ title }) =>
      title.toLowerCase().includes(lowerCaseTodoFilterText)
    )
    .filter(
      ({ isDone }) => (shouldShowUndoneOnly && !isDone) || !shouldShowUndoneOnly
    )
    .map((todo: Todo) => TodoViewFactory.createTodoView(viewType, todo));

  return (
    <div className={classNames.container}>
      {isLoading ? (
        <Typography variant="h4">Loading todos...</Typography>
      ) : (
        TodosViewFactory.createTodosView(viewType, todoListItems)
      )}
    </div>
  );
}
