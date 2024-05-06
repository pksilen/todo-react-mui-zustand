import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Checkbox, IconButton, TableCell, TableRow } from '@mui/material';
import { Todo } from '../../../stores/todos/Todo';
import { useTodosStore } from '../../../stores/todos/todosStore';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const { toggleTodoDone, editTodo, removeTodo } = useTodosStore((store) => store.actions);

  return (
    <TableRow>
      <TableCell>
        <Checkbox checked={isDone} color="success" onChange={() => toggleTodoDone(id)} />
      </TableCell>
      <TableCell sx={{ flexGrow: 1, textDecoration: isDone ? 'line-through' : '' }}>
        {title}
      </TableCell>
      <TableCell align="right">
        <IconButton onClick={() => editTodo(id, title + ' edited')}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
