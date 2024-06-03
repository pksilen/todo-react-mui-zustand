import classNames from 'classnames';
import { IconButton } from 'app/common/components/buttons/IconButton';
import { EditIcon, RemoveIcon } from 'app/common/components/icons/Icons';
import { Checkbox } from 'app/common/components/inputs/Checkbox';
import { EditTextInput } from 'app/common/components/inputs/EditTextInput';
import { TableCell } from 'app/common/components/table/TableCell';
import { TableRow } from 'app/common/components/table/TableRow';
import { Todo } from 'app/stores/todos/Todo';
import classes from './TodoTableRow.module.scss';
import { useTodo } from './useTodo';

type Props = {
  readonly todo: Todo;
};

export const TodoTableRow = ({ todo: { id, title, isDone } }: Props) => {
  const { changeTitle, isEditable, remove, setAsEditable, toggleDone } = useTodo(id);
  const titleClasses = classNames(classes.title, isDone && classes.isDone);

  return (
    <TableRow>
      <TableCell>
        <Checkbox aria-label={title} isChecked={isDone} color="success" onChange={toggleDone} />
      </TableCell>
      {isEditable ? (
        <TableCell>
          <EditTextInput onEditComplete={changeTitle} text={title} />
        </TableCell>
      ) : (
        <TableCell className={titleClasses} onDoubleClick={setAsEditable}>
          {title}
        </TableCell>
      )}
      <TableCell className={classes.buttons}>
        <IconButton icon={<EditIcon />} onClick={setAsEditable} />
        <IconButton icon={<RemoveIcon />} onClick={remove} />
      </TableCell>
    </TableRow>
  );
};
