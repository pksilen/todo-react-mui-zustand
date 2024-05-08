import CheckIcon from '@mui/icons-material/Check';
import { useTodosStore } from '../../../../stores/todos/todosStore';
import { TodoButton } from './TodoButton';

type Props = {
  readonly id: string;
  readonly isDone: boolean;
};

export const ToggleTodoDoneButton = ({ id, isDone }: Props) => {
  const { toggleTodoDone } = useTodosStore((store) => store.actions);

  return (
    <TodoButton
      icon={<CheckIcon />}
      onClick={() => toggleTodoDone(id)}
      text={isDone ? 'Mark undone' : 'Mark done'}
    />
  );
};
