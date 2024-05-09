import { EditIcon } from 'app/common/components/icons/Icons';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { TodoButton } from './TodoButton';

type Props = {
  readonly id: string;
};

export const EditTodoButton = ({ id }: Props) => {
  const { setEditableTodo } = useTodosStore((store) => store.actions);
  return <TodoButton icon={<EditIcon />} onClick={() => setEditableTodo(id)} text="Edit" />;
};
