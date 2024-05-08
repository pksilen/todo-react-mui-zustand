import { afterMount } from '../../../common/components/hooks/afterMount';
import { useControlsStore } from '../../../stores/controls/controlsStore';
import { Todo } from '../../../stores/todos/Todo';
import { useTodosStore } from '../../../stores/todos/todosStore';

export const useTodos = () => {
  const state = useTodosStore((store) => ({
    isPending: store.isPending,
    lowerCaseTodoFilterText: store.lowerCaseTodoFilterText,
    shouldShowUndoneTodosOnly: store.shouldShowUndoneTodosOnly,
    todos: store.todos
  }));

  const viewType = useControlsStore((store) => store.viewType);
  const { fetchTodos } = useTodosStore((store) => store.actions);
  afterMount(fetchTodos);
  const isUndone = ({ isDone }: Todo) => !isDone;

  const titleContainsTodoFilterText = ({ title }: Todo) =>
    title.toLowerCase().includes(state.lowerCaseTodoFilterText);

  return {
    isPending: state.isPending,
    isUndone,
    shouldShowUndoneTodosOnly: state.shouldShowUndoneTodosOnly,
    titleContainsTodoFilterText,
    todos: state.todos,
    viewType
  };
};
