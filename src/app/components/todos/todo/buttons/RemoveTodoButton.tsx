import RemoveIcon from '@mui/icons-material/Remove';
import { useTodosStore } from '../../../../stores/todos/todosStore';
import { TodoButton } from './TodoButton';

type Props = {
  id: string;
};

export const RemoveTodoButton = ({ id }: Props) => {
  const { removeTodo } = useTodosStore((store) => store.actions);
  return <TodoButton icon={<RemoveIcon />} onClick={() => removeTodo(id)} text="Remove" />;
};
