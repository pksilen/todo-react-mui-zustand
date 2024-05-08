import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import classNames from 'classnames';
import { TableCell } from 'app/common/components/table/TableCell';
import { TableRow } from 'app/common/components/table/TableRow';
import { Todo } from 'app/stores/todos/Todo';
import { IconButton } from '../../../common/components/buttons/IconButton';
import { Checkbox } from '../../../common/components/inputs/Checkbox';
import { useTodosStore } from '../../../stores/todos/todosStore';
import classes from './TodoTableRow.module.scss';
import { TodoTitleInput } from './TodoTitleInput';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { removeTodo, setEditableTodo, toggleTodoDone } = useTodosStore((store) => store.actions);
  const isEditableTodo = editableTodoId === id;

  const titleClasses = classNames(classes.title, {
    [classes.isDone]: isDone
  });

  return (
    <TableRow>
      <TableCell>
        <Checkbox isChecked={isDone} color="success" onChange={() => toggleTodoDone(id)} />
      </TableCell>
      {isEditableTodo ? (
        <TodoTitleInput id={id} title={title} />
      ) : (
        <TableCell className={titleClasses} onDoubleClick={() => setEditableTodo(id)}>
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={() => setEditableTodo(id)} />
        <IconButton icon={<DeleteIcon />} onClick={() => removeTodo(id)} />
      </TableCell>
    </TableRow>
  );
};
