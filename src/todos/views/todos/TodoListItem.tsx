import { TaskAlt } from '@mui/icons-material';
import { ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { Todo } from '../../stores/Todo';
import useTodosStore from '../../stores/todosStore';
import EditTodoButton from './buttons/EditTodoButton';
import RemoveTodoButton from './buttons/RemoveTodoButton';
import ToggleTodoDoneButton from './buttons/ToggleTodoDoneButton';
import classNames from './TodoListItem.module.scss';

type Props = {
  readonly todo: Todo;
};

export default function TodoListItem({ todo: { id, title, isDone } }: Props) {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { editTodo, setEditableTodo } = useTodosStore((store) => store.actions);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setEditableTodo(null);
      setEditedTodoTitle(title);
    } else if (event.key === 'Enter') {
      editTodo(id, editedTodoTitle);
      setEditableTodo(null);
    }
  }

  let todoListItemOrEditTodoTitleInput;

  if (editableTodoId === id) {
    todoListItemOrEditTodoTitleInput = (
      <TextField
        InputProps={{ onKeyDown: handleKeyDown }}
        onChange={(event) => setEditedTodoTitle(event.target.value)}
        sx={{ flexGrow: 1 }}
        value={editedTodoTitle}
        variant="standard"
      />
    );
  } else {
    todoListItemOrEditTodoTitleInput = (
      <ListItemText
        primary={title}
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          textDecoration: isDone ? 'line-through' : ''
        }}
      />
    );
  }

  return (
    <ListItem sx={{ display: 'flex' }}>
      <ListItemIcon>
        <TaskAlt color={isDone ? 'success' : 'error'} />
      </ListItemIcon>
      {todoListItemOrEditTodoTitleInput}
      <div className={classNames.buttons}>
        <ToggleTodoDoneButton id={id} isDone={isDone} />
        <EditTodoButton id={id} />
        <RemoveTodoButton id={id} />
      </div>
    </ListItem>
  );
}
