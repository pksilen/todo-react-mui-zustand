import { Heading4 } from 'app/common/components/typography/Heading4';
import { isAny } from 'app/common/utils/isAny';
import { Todo } from 'app/stores/todos/Todo';
import classes from './Todos.module.scss';
import { createTodoElement } from './factories/createTodoElement';
import { createTodosElement } from './factories/createTodosElement';
import { useTodos } from './hooks/useTodos';

export const Todos = () => {
  const {
    isPending,
    isUndone,
    todos,
    shouldShowUndoneTodosOnly,
    titleContainsTodoFilterText,
    viewType
  } = useTodos();

  const todoElements = todos
    .filter(titleContainsTodoFilterText)
    .filter(shouldShowUndoneTodosOnly ? isUndone : isAny)
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
