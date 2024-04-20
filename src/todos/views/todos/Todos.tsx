import { List } from '@mui/material';
import useTodosStore from '../../model/todosStore';
import { Todo } from '../../model/Todo';
import TodoListItem from './TodoListItem';
import classNames from './Todos.module.scss';

export default function Todos() {
  const todos = useTodosStore((store) => store.todos);
  const todoFilterText = useTodosStore((store) => store.todoFilterText);

  const todoListItems = todos
    .filter(({ title }) => title.includes(todoFilterText))
    .map((todo: Todo) => <TodoListItem todo={todo} />);

  return (
    <div className={classNames.container}>
      <List>{todoListItems}</List>
    </div>
  );
}
