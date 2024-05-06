import { ViewType } from 'app/stores/controls/controlsStore';
import { Todo } from 'app/stores/todos/Todo';
import { TodoListItem } from '../todo/TodoListItem';
import { TodoTableRow } from '../todo/TodoTableRow';

export const createTodoElement = (viewType: ViewType, todo: Todo) => {
  if (viewType === 'list') {
    return <TodoListItem key={todo.id} todo={todo} />;
  } else if (viewType === 'table') {
    return <TodoTableRow key={todo.id} todo={todo} />;
  }

  throw new Error('Unsupported view type');
};
