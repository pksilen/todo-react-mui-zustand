import { Checkbox, IconButton, TableCell, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo } from '../../model/Todo';
import useTodosStore from '../../model/todosStore';

type Props = {
  todo: Todo;
};

export default function TodoTableRow({ todo: { id, title, isDone } }: Props) {
  const { toggleTodoDone, editTodo, removeTodo } = useTodosStore(
    (store) => store.actions
  );

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
        sx={{ flexGrow: 1, textDecoration: isDone ? 'line-through' : '' }}
      >
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
}
