import { afterMount } from 'app/common/hooks/afterMount';
import { useControlsStore } from 'app/stores/controls/controlsStore';
import { Todo } from 'app/stores/todos/Todo';
import { useTodosStore } from 'app/stores/todos/todosStore';

export const useTodos = () => {
  const state = useTodosStore((store) => ({
    isPending: store.isPending,
    lowerCaseTodoFilterText: store.lowerCaseTodoFilterText,
    shouldShowUndoneTodosOnly: store.shouldShowUndoneTodosOnly,
    todos: store.todos
  }));

  const { fetchTodos } = useTodosStore((store) => store.actions);
  afterMount(fetchTodos);

  const titleContainsTodoFilterText = ({ title }: Todo) =>
    title.toLowerCase().includes(state.lowerCaseTodoFilterText);

  return {
    isPending: state.isPending,
    isUndone: ({ isDone }: Todo) => !isDone,
    shouldShowUndoneTodosOnly: state.shouldShowUndoneTodosOnly,
    titleContainsTodoFilterText,
    todos: state.todos,
    viewType: useControlsStore((store) => store.viewType)
  };
};
