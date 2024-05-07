import { useState } from 'react';
import { useTodosStore } from '../../../stores/todos/todosStore';

export const useTodoAdding = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const { addTodo } = useTodosStore((store) => store.actions);

  const maybeAddTodo = () => {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  };

  return { maybeAddTodo, todoTitle, setTodoTitle };
};
