import { Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { TaskAlt } from '@mui/icons-material';
import { Todo } from '../../stores/Todo';
import useTodosStore from '../../stores/todosStore';

type Props = {
  todo: Todo;
};

export default function TodoListItem({ todo: { id, title, isDone } }: Props) {
  const { toggleTodoDone, editTodo, removeTodo } = useTodosStore(
    (store) => store.actions
  );

  return (
    <ListItem sx={{ display: 'flex' }}>
      <ListItemIcon>
        <TaskAlt color={isDone ? 'success' : 'error'} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        sx={{ textDecoration: isDone ? 'line-through' : '' }}
      />
      <Button onClick={() => toggleTodoDone(id)} sx={{ flexShrink: 0 }}>
        {isDone ? 'Mark undone' : 'Mark done'}
      </Button>
      <Button
        onClick={() => editTodo(id, title + ' edited')}
        sx={{ flexShrink: 0 }}
      >
        Edit
      </Button>
      <Button onClick={() => removeTodo(id)} sx={{ flexShrink: 0 }}>
        Remove
      </Button>
    </ListItem>
  );
}
