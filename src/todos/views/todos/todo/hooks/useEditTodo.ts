import { KeyboardEvent, useState } from 'react';
import useTodosStore from '../../../../stores/todosStore';

export default function useEditTodo(id: string, title: string) {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
  const { editTodo, setEditableTodo } = useTodosStore((store) => store.actions);
  const [editedTodoTitle, setEditedTodoTitle] = useState(title);

  function updateTodo() {
    editTodo(id, editedTodoTitle);
    setEditableTodo(null);
  }

  function handleInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      setEditableTodo(null);
      setEditedTodoTitle(title);
    } else if (event.key === 'Enter') {
      updateTodo();
    }
  }

  function handleInputBlur() {
    updateTodo();
  }

  return {
    editableTodoId,
    editedTodoTitle,
    handleInputBlur,
    handleInputKeyDown,
    setEditableTodo,
    setEditedTodoTitle
  };
}
