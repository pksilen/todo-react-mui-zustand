import { TaskAlt } from '@mui/icons-material';
import { ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { Todo } from '../../stores/Todo';
import EditTodoButton from './buttons/EditTodoButton';
import RemoveTodoButton from './buttons/RemoveTodoButton';
import ToggleTodoDoneButton from './buttons/ToggleTodoDoneButton';
import useEditTodo from './hooks/useEditTodo';
import classNames from './TodoListItem.module.scss';

type Props = {
  readonly todo: Todo;
};

export default function TodoListItem({ todo: { id, title, isDone } }: Props) {
  const {
    editableTodoId,
    editedTodoTitle,
    handleInputBlur,
    handleInputKeyDown,
    setEditableTodo,
    setEditedTodoTitle
  } = useEditTodo(id, title);

  return (
    <ListItem sx={{ display: 'flex' }}>
      <ListItemIcon>
        <TaskAlt color={isDone ? 'success' : 'error'} />
      </ListItemIcon>
      {editableTodoId === id ? (
        <TextField
          InputProps={{ onBlur: handleInputBlur, onKeyDown: handleInputKeyDown }}
          onChange={(event) => setEditedTodoTitle(event.target.value)}
          sx={{ flexGrow: 1 }}
          value={editedTodoTitle}
          variant="standard"
        />
      ) : (
        <ListItemText
          onDoubleClick={() => setEditableTodo(id)}
          primary={title}
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            textDecoration: isDone ? 'line-through' : ''
          }}
        />
      )}
      <div className={classNames.buttons}>
        <ToggleTodoDoneButton id={id} isDone={isDone} />
        <EditTodoButton id={id} />
        <RemoveTodoButton id={id} />
      </div>
    </ListItem>
  );
}
