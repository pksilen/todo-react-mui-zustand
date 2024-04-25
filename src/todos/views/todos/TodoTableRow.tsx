import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
  TextField
} from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { Todo } from '../../stores/Todo';
import useTodosStore from '../../stores/todosStore';

type Props = {
  todo: Todo;
};

export default function TodoTableRow({ todo: { id, title, isDone } }: Props) {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  const { editTodo, removeTodo, setEditableTodo, toggleTodoDone } =
    useTodosStore((store) => store.actions);

  function updateTodo() {
    editTodo(id, editedTodoTitle);
    setEditableTodo(null);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setEditableTodo(null);
      setEditedTodoTitle(title);
    } else if (event.key === 'Enter') {
      updateTodo();
    }
  }

  function handleBlur() {
    updateTodo();
  }

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          checked={isDone}
          color="success"
          onChange={() => toggleTodoDone(id)}
        />
      </TableCell>
      <TableCell
        onDoubleClick={() => setEditableTodo(id)}
        sx={{ textDecoration: isDone ? 'line-through' : '' }}
      >
        {editableTodoId === id ? (
          <TextField
            fullWidth
            InputProps={{ onBlur: handleBlur, onKeyDown: handleKeyDown }}
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
