import { Pending } from 'app/common/components/Pending';
import { Heading4 } from 'app/common/components/typography/Heading4';
import { useTodosStore } from 'app/stores/todos/todosStore';
import classes from './Todos.module.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const PendingTodos = ({ children }: Props) => {
  const isPending = useTodosStore((store) => store.isPending);

  return (
    <Pending
      className={classes.todos}
      fallback={isPending && <Heading4>Loading todos...</Heading4>}
    >
      {children}
    </Pending>
  );
};
