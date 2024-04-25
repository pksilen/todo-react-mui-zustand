import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import useTodosStore from '../../../stores/todosStore';

type Props = {
  readonly id: string;
};

export default function EditTodoButton({ id }: Props) {
  const { setEditableTodo } = useTodosStore((store) => store.actions);
  const isPortraitPhone = useMediaQuery('(max-width:480px)');

  return isPortraitPhone ? (
    <IconButton onClick={() => setEditableTodo(id)}>
      <EditIcon />
    </IconButton>
  ) : (
    <Button onClick={() => setEditableTodo(id)} sx={{ flexShrink: 0 }}>
      Edit
    </Button>
  );
}
