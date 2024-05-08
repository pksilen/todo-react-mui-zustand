import { KeyboardEvent, useState } from 'react';
import { TextInput } from '../../../../common/components/inputs/TextInput';
import { useTodosStore } from '../../../../stores/todos/todosStore';
import classes from './TodoTitleInput.module.scss';

type Props = {
  readonly id: string;
  readonly title: string;
};

export const TodoTitleInput = ({ id, title }: Props) => {
  const { editTodo, setEditableTodo } = useTodosStore((store) => store.actions);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  const updateTodo = () => {
    editTodo(id, editedTodoTitle);
    setEditableTodo(null);
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setEditableTodo(null);
      setEditedTodoTitle(title);
    } else if (event.key === 'Enter') {
      updateTodo();
    }
  };

  const handleInputBlur = () => {
    updateTodo();
  };

  return (
    <TextInput
      autoFocus
      className={classes.titleInput}
      inputProps={{ onBlur: handleInputBlur, onKeyDown: handleInputKeyDown }}
      onChange={(event) => setEditedTodoTitle(event.target.value)}
      value={editedTodoTitle}
    />
  );
};
