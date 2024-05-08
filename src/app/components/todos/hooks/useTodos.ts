import { afterMount } from '../../../common/components/hooks/afterMount';
import { useControlsStore } from '../../../stores/controls/controlsStore';
import { Todo } from '../../../stores/todos/Todo';
import { useTodosStore } from '../../../stores/todos/todosStore';

export const useTodos = () => {
  const isPending = useTodosStore((store) => store.isPending);
  const lowerCaseTodoFilterText = useTodosStore((store) => store.lowerCaseTodoFilterText);
  const shouldShowUndoneTodosOnly = useTodosStore((store) => store.shouldShowUndoneTodosOnly);
  const todos = useTodosStore((store) => store.todos);
  const viewType = useControlsStore((store) => store.viewType);
  const { fetchTodos } = useTodosStore((store) => store.actions);
  afterMount(fetchTodos);
  const isUndone = ({ isDone }: Todo) => !isDone;

  const titleContainsTodoFilterText = ({ title }: Todo) =>
    title.toLowerCase().includes(lowerCaseTodoFilterText);

  return {
    isPending,
    isUndone,
    shouldShowUndoneTodosOnly,
    titleContainsTodoFilterText,
    todos,
    viewType
  };
};
