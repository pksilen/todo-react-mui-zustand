import { getUndoneTodoCount } from 'app/stores/todos/todoSelectors';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { Badge } from '../../common/components/badges/Badge';
import { SearchInput } from '../../common/components/inputs/SearchInput';
import { Heading2 } from '../../common/components/typography/Heading2';
import classes from './Header.module.scss';

export const Header = () => {
  const undoneTodoCount = useTodosStore((store) => getUndoneTodoCount(store));
  const { setTodoFilter } = useTodosStore((store) => store.actions);

  return (
    <header className={classes.header}>
      <Badge content={undoneTodoCount} color="error">
        <Heading2>Todos</Heading2>
      </Badge>
      <SearchInput
        className={classes.searchInput}
        onChange={(event) => setTodoFilter(event.target.value)}
        placeholder="Search todos..."
      />
    </header>
  );
};
