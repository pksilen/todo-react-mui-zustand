import DoneIcon from '@mui/icons-material/Done';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import useTodosStore from '../../../../stores/todosStore';

type Props = {
  readonly id: string;
  readonly isDone: boolean;
};

export default function ToggleTodoDoneButton({ id, isDone }: Props) {
  const { toggleTodoDone } = useTodosStore((store) => store.actions);
  const isPortraitPhone = useMediaQuery('(max-width:480px)');

  return isPortraitPhone ? (
    <IconButton onClick={() => toggleTodoDone(id)}>
      <DoneIcon />
    </IconButton>
  ) : (
    <Button onClick={() => toggleTodoDone(id)} sx={{ flexShrink: 0 }}>
      {isDone ? 'Mark undone' : 'Mark done'}
    </Button>
  );
}
