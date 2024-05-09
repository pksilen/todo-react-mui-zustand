import { RemoveIcon } from 'app/common/components/icons/Icons';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { TodoButton } from './TodoButton';

type Props = {
  readonly id: string;
};

export const RemoveTodoButton = ({ id }: Props) => {
  const { removeTodo } = useTodosStore((store) => store.actions);
  return <TodoButton icon={<RemoveIcon />} onClick={() => removeTodo(id)} text="Remove" />;
};
