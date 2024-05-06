import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import { useTodosStore } from '../../../../stores/todos/todosStore';

type Props = {
  readonly id: string;
};

export const RemoveTodoButton = ({ id }: Props) => {
  const { removeTodo } = useTodosStore((store) => store.actions);
  const isPortraitPhone = useMediaQuery('(max-width:480px)');

  return isPortraitPhone ? (
    <IconButton onClick={() => removeTodo(id)}>
      <DeleteIcon />
    </IconButton>
  ) : (
    <Button onClick={() => removeTodo(id)} sx={{ flexShrink: 0 }}>
      Remove
    </Button>
  );
};
