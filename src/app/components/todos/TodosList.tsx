import { Pending } from 'app/common/components/Pending';
import { List } from 'app/common/components/list/List';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { Todo } from 'app/stores/todos/Todo';
import classes from './Todos.module.scss';
import { useTodos } from './hooks/useTodos';
import { TodoListItem } from './todo/TodoListItem';

export const TodosList = () => {
  const { isPending, shownTodos } = useTodos();

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      <List>
        {shownTodos.map((todo: Todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Pending>
  );
};
