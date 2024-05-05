import { TodosStore } from './todosStore';

export const getUndoneTodoCount = (store: TodosStore) =>
  store.todos.filter(({ isDone }) => !isDone).length;
