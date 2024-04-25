import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton, TableCell, TableRow, TextField } from '@mui/material';
import { Todo } from '../../stores/Todo';
import useTodosStore from '../../stores/todosStore';
import useEditTodo from './hooks/useEditTodo';

type Props = {
  todo: Todo;
};

export default function TodoTableRow({ todo: { id, title, isDone } }: Props) {
  const { removeTodo, toggleTodoDone } = useTodosStore((store) => store.actions);

  const {
    editableTodoId,
    editedTodoTitle,
    handleInputBlur,
    handleInputKeyDown,
    setEditableTodo,
    setEditedTodoTitle
  } = useEditTodo(id, title);

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={isDone} color="success" onChange={() => toggleTodoDone(id)} />
      </TableCell>
      <TableCell
        onDoubleClick={() => setEditableTodo(id)}
        sx={{ textDecoration: isDone ? 'line-through' : '' }}
      >
        {editableTodoId === id ? (
          <TextField
            fullWidth
            InputProps={{ onBlur: handleInputBlur, onKeyDown: handleInputKeyDown }}
            onChange={(event) => setEditedTodoTitle(event.target.value)}
            value={editedTodoTitle}
            variant="standard"
          />
        ) : (
          title
        )}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => setEditableTodo(id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
