import { afterMount } from 'app/common/components/hooks/afterMount';
import { Todo } from 'app/stores/todos/Todo';
import { Heading4 } from '../../common/components/typography/Heading4';
import classes from './Todos.module.scss';
import { createTodoElement } from './factories/createTodoElement';
import { createTodosElement } from './factories/createTodosElement';
import { useTodos } from './hooks/useTodos';

export const Todos = () => {
  const { fetchTodos, isPending, shouldShowTodoFilter, todos, todoTitleFilter, viewType } =
    useTodos();

  afterMount(fetchTodos);

  const todoElements = todos
    .filter(todoTitleFilter)
    .filter(shouldShowTodoFilter)
    .map((todo: Todo) => createTodoElement(viewType, todo));

  return (
    <section className={classes.todos}>
      {isPending ? (
        <Heading4>Loading todos...</Heading4>
      ) : (
        createTodosElement(viewType, todoElements)
      )}
    </section>
  );
};
