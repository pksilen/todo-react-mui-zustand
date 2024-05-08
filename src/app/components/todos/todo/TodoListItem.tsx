import { TaskAlt } from '@mui/icons-material';
import classNames from 'classnames';
import { Todo } from 'app/stores/todos/Todo';
import { ListItem } from '../../../common/components/list/ListItem';
import { ListItemIcon } from '../../../common/components/list/ListItemIcon';
import { ListItemText } from '../../../common/components/list/ListItemText';
import { useTodosStore } from '../../../stores/todos/todosStore';
import classes from './TodoListItem.module.scss';
import { EditTodoButton } from './buttons/EditTodoButton';
import { RemoveTodoButton } from './buttons/RemoveTodoButton';
import { ToggleTodoDoneButton } from './buttons/ToggleTodoDoneButton';
import { TodoTitleInput } from './input/TodoTitleInput';

type Props = {
  readonly todo: Todo;
};

export const TodoListItem = ({ todo: { id, title, isDone } }: Props) => {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { setEditableTodo } = useTodosStore((store) => store.actions);
  const isEditableTodo = editableTodoId === id;

  const titleClasses = classNames(classes.title, {
    [classes.isDone]: isDone
  });

  return (
    <ListItem className={classes.todo}>
      <ListItemIcon icon={<TaskAlt color={isDone ? 'success' : 'error'} />} />
      {isEditableTodo ? (
        <TodoTitleInput id={id} title={title} />
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
