import { create } from 'zustand';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';

interface TodosStore {
  todos: Todo[];
  todoFilterText: string;
  actions: {
    addTodo: (title: string) => void;
    editTodo: (id: string, newTitle: string) => void;
    toggleTodoDone: (id: string) => void;
    removeTodo: (id: string) => void;
    setTodoFilter: (text: string) => void;
  };
}

const useTodosStore = create<TodosStore>()((setState) => ({
  todos: [],
  todoFilterText: '',

  actions: {
    addTodo: (title: string) =>
      setState((store) => ({
        todos: [...store.todos, { id: uuidv4(), title, isDone: false }]
      })),

    editTodo: (id: string, newTitle: string) =>
      setState((store) => ({
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        )
      })),

    toggleTodoDone: (id: string) =>
      setState((store) => ({
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      })),

    removeTodo: (id: string) =>
      setState((store) => ({
        todos: store.todos.filter((todo) => todo.id !== id)
      })),

    setTodoFilter: (text: string) =>
      setState((store) => ({ todoFilterText: text }))
  }
}));

export default useTodosStore;
