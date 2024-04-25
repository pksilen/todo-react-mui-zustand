import { Typography } from '@mui/material';
import { afterMount } from '../../../utils/utils';
import { Todo } from '../../stores/Todo';
import useTodosStore from '../../stores/todosStore';
import useViewControlsStore from '../../stores/viewControlsStore';
import TodosViewFactory from './factories/TodosViewFactory';
import TodoViewFactory from './factories/TodoViewFactory';
import classNames from './Todos.module.scss';

export default function Todos() {
  const { isLoading, lowerCaseTodoFilterText, shouldShowUndoneOnly, todos } = useTodosStore(
    (store) => store
  );

  const { fetchTodos } = useTodosStore((store) => store.actions);
  const viewType = useViewControlsStore((store) => store.viewType);
  afterMount(fetchTodos);

  const todoListItems = todos
    .filter(({ title }) => title.toLowerCase().includes(lowerCaseTodoFilterText))
    .filter(({ isDone }) => (shouldShowUndoneOnly && !isDone) || !shouldShowUndoneOnly)
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
