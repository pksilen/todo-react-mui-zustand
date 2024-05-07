import { useControlsStore } from '../../../stores/controls/controlsStore';
import { Todo } from '../../../stores/todos/Todo';
import { useTodosStore } from '../../../stores/todos/todosStore';

export const useTodos = () => {
  const { isPending, lowerCaseTodoFilterText, shouldShowUndoneTodosOnly, todos } = useTodosStore(
    (store) => store
  );
  const viewType = useControlsStore((store) => store.viewType);
  const { fetchTodos } = useTodosStore((store) => store.actions);

  const shouldShowTodoFilter = ({ isDone }: Todo) =>
    (shouldShowUndoneTodosOnly && !isDone) || !shouldShowUndoneTodosOnly;

  const todoTitleFilter = ({ title }: Todo) =>
    title.toLowerCase().includes(lowerCaseTodoFilterText);

  return { fetchTodos, isPending, shouldShowTodoFilter, todos, todoTitleFilter, viewType };
};
