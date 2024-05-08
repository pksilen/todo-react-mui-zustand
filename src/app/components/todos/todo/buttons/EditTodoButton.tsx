import EditIcon from '@mui/icons-material/Edit';
import { useTodosStore } from '../../../../stores/todos/todosStore';
import { TodoButton } from './TodoButton';

type Props = {
  id: string;
};

export const EditTodoButton = ({ id }: Props) => {
  const { setEditableTodo } = useTodosStore((store) => store.actions);
  return <TodoButton icon={<EditIcon />} onClick={() => setEditableTodo(id)} text="Edit" />;
};
