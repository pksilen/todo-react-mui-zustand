import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import todoService from '../service/FakeTodoService';

interface State {
  isLoading: boolean;
  todos: Todo[];
  todoFilterText: string;
}

interface Actions {
  fetchTodos: () => void;
  addTodo: (title: string) => void;
  editTodo: (id: string, newTitle: string) => void;
  toggleTodoDone: (id: string) => void;
  removeTodo: (id: string) => void;
  setTodoFilter: (text: string) => void;
}

type TodosStore = State & { actions: Actions };

const useTodosStore = create<TodosStore>()((setState, getState) => ({
  isLoading: false,
  todos: [],
  todoFilterText: '',

  actions: {
    fetchTodos: async () => {
      setState({ isLoading: true });
      const todos = await todoService.getTodos();
      setState({ isLoading: false, todos });
    },

    addTodo: (title: string) =>
      setState({
        todos: [...getState().todos, { id: uuidv4(), title, isDone: false }]
      }),

    editTodo: (id: string, newTitle: string) =>
      setState({
        todos: getState().todos.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        )
      }),

    toggleTodoDone: (id: string) =>
      setState({
        todos: getState().todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      }),

    removeTodo: (id: string) =>
      setState({
        todos: getState().todos.filter((todo) => todo.id !== id)
      }),

    setTodoFilter: (text: string) => setState({ todoFilterText: text })
  }
}));

export default useTodosStore;

export function getUndoneTodoCount(store: TodosStore) {
  return store.todos.filter(({ isDone }) => !isDone).length;
}
