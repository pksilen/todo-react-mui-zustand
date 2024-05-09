import classNames from 'classnames';
import { IconButton } from 'app/common/components/buttons/IconButton';
import { Checkbox } from 'app/common/components/inputs/Checkbox';
import { TableCell } from 'app/common/components/table/TableCell';
import { TableRow } from 'app/common/components/table/TableRow';
import { Todo } from 'app/stores/todos/Todo';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { EditIcon, RemoveIcon } from '../../../common/components/icons/Icons';
import classes from './TodoTableRow.module.scss';
import { TodoTitleInput } from './input/TodoTitleInput';

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
        <TableCell>
          <TodoTitleInput id={id} title={title} />
        </TableCell>
      ) : (
        <TableCell className={titleClasses} onDoubleClick={() => setEditableTodo(id)}>
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={() => setEditableTodo(id)} />
        <IconButton icon={<RemoveIcon />} onClick={() => removeTodo(id)} />
      </TableCell>
    </TableRow>
  );
};
