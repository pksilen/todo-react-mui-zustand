import classNames from 'classnames';
import { TodoIcon } from 'app/common/components/icons/Icons';
import { ListItem } from 'app/common/components/list/ListItem';
import { ListItemIcon } from 'app/common/components/list/ListItemIcon';
import { ListItemText } from 'app/common/components/list/ListItemText';
import { Todo } from 'app/stores/todos/Todo';
import { useTodosStore } from 'app/stores/todos/todosStore';
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
      <ListItemIcon icon={<TodoIcon color={isDone ? 'success' : 'error'} />} />
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
