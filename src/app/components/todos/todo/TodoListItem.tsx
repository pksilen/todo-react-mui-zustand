import { TaskAlt } from '@mui/icons-material';
import classNames from 'classnames';
import { Todo } from 'app/stores/todos/Todo';
import { TextInput } from '../../../common/components/inputs/TextInput';
import { ListItem } from '../../../common/components/listitems/ListItem';
import { ListItemIcon } from '../../../common/components/listitems/ListItemIcon';
import { ListItemText } from '../../../common/components/listitems/ListItemText';
import classes from './TodoListItem.module.scss';
import { EditTodoButton } from './buttons/EditTodoButton';
import { RemoveTodoButton } from './buttons/RemoveTodoButton';
import { ToggleTodoDoneButton } from './buttons/ToggleTodoDoneButton';
import useTodoEditing from './hooks/useTodoEditing';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const {
    editableTodoId,
    editedTodoTitle,
    handleInputBlur,
    handleInputKeyDown,
    setEditableTodo,
    setEditedTodoTitle
  } = useTodoEditing(id, title);

  const isEditableTodo = editableTodoId === id;

  const titleClasses = classNames(classes.title, {
    [classes.isDone]: isDone
  });

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TaskAlt color={isDone ? 'success' : 'error'} />} />
      {isEditableTodo ? (
        <TextInput
          className={classes.titleInput}
          inputProps={{ onBlur: handleInputBlur, onKeyDown: handleInputKeyDown }}
          onChange={(event) => setEditedTodoTitle(event.target.value)}
          value={editedTodoTitle}
        />
      ) : (
        <ListItemText
          className={titleClasses}
          onDoubleClick={() => setEditableTodo(id)}
          text={title}
        />
      )}
      <div className={classes.buttons}>
        <ToggleTodoDoneButton id={id} isDone={isDone} />
        <EditTodoButton id={id} />
        <RemoveTodoButton id={id} />
      </div>
    </ListItem>
  );
};
