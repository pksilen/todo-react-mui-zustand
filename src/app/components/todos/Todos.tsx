import { Typography } from '@mui/material';
import { afterMount } from '../../common/components/hooks/afterMount';
import { useControlsStore } from '../../stores/controls/controlsStore';
import { Todo } from '../../stores/todos/Todo';
import { useTodosStore } from '../../stores/todos/todosStore';
import { createTodoElement } from './factories/createTodoElement';
import { createTodosElement } from './factories/createTodosElement';
import classes from './Todos.module.scss';

export const Todos = () => {
  const { isPending, lowerCaseTodoFilterText, shouldShowUndoneTodosOnly, todos } = useTodosStore(
    (store) => store
  );

  const { fetchTodos } = useTodosStore((store) => store.actions);
  const viewType = useControlsStore((store) => store.viewType);

  afterMount(fetchTodos);

  const todoElements = todos
    .filter(({ title }) => title.toLowerCase().includes(lowerCaseTodoFilterText))
    .filter(({ isDone }) => (shouldShowUndoneTodosOnly && !isDone) || !shouldShowUndoneTodosOnly)
    .map((todo: Todo) => createTodoElement(viewType, todo));

  return (
    <section className={classes.todos}>
      {isPending ? (
        <Typography variant="h4">Loading todos...</Typography>
      ) : (
        createTodosElement(viewType, todoElements)
      )}
    </section>
  );
};