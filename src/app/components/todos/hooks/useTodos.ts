import { afterMount } from 'app/common/hooks/afterMount';
import { getShownTodos } from 'app/stores/todos/todoSelectors';
import { useTodosStore } from 'app/stores/todos/todosStore';

export const useTodos = () => {
  const { isPending, shownTodos } = useTodosStore((store) => ({
    isPending: store.isPending,
    shownTodos: getShownTodos(store)
  }));

  const { fetchTodos } = useTodosStore((store) => store.actions);
  afterMount(fetchTodos);

  return {
    isPending,
    shownTodos
  };
};
