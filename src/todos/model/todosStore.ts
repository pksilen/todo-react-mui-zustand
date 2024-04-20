import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import todoService from '../service/FakeTodoService';

interface State {
  isLoading: boolean;
  lowerCaseTodoFilterText: string;
  shouldShowUndoneOnly: boolean;
  todos: Todo[];
}

interface Actions {
  addTodo: (title: string) => void;
  editTodo: (id: string, newTitle: string) => void;
  fetchTodos: () => void;
  removeTodo: (id: string) => void;
  setTodoFilter: (text: string) => void;
  toggleShouldShowUndoneOnly: () => void;
  toggleTodoDone: (id: string) => void;
}

type TodosStore = State & { actions: Actions };

const useTodosStore = create<TodosStore>()((setState, getState) => ({
  isLoading: false,
  lowerCaseTodoFilterText: '',
  shouldShowUndoneOnly: false,
  todos: [],

  actions: {
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

    fetchTodos: async () => {
      setState({ isLoading: true });
      const todos = await todoService.getTodos();
      setState({ isLoading: false, todos });
    },

    removeTodo: (id: string) =>
      setState({
        todos: getState().todos.filter((todo) => todo.id !== id)
      }),

    toggleShouldShowUndoneOnly: () =>
      setState({ shouldShowUndoneOnly: !getState().shouldShowUndoneOnly }),

    setTodoFilter: (text: string) =>
      setState({ lowerCaseTodoFilterText: text.toLowerCase() }),

    toggleTodoDone: (id: string) =>
      setState({
        todos: getState().todos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
      })
  }
}));

export default useTodosStore;

export function getUndoneTodoCount(store: TodosStore) {
  return store.todos.filter(({ isDone }) => !isDone).length;
}
