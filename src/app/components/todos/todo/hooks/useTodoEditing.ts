import { KeyboardEvent, useState } from 'react';
import { useTodosStore } from '../../../../stores/todos/todosStore';

export default function useTodoEditing(id: string, title: string) {
  const editableTodoId = useTodosStore((store) => store.editableTodoId);
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

  return {
    editableTodoId,
    editedTodoTitle,
    handleInputBlur,
    handleInputKeyDown,
    setEditableTodo,
    setEditedTodoTitle
  };
}
