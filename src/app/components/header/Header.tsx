import SearchIcon from '@mui/icons-material/Search';
import { Badge, BadgeProps, InputAdornment, TextField, Typography, styled } from '@mui/material';
import { getUndoneTodoCount } from 'app/stores/todos/todoSelectors';
import { useTodosStore } from 'app/stores/todos/todosStore';
import classes from './Header.module.scss';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '16px',
    padding: '2px 4px',
    right: -3,
    top: 15
  }
}));

export const Header = () => {
  const undoneTodoCount = useTodosStore((store) => getUndoneTodoCount(store));
  const { setTodoFilter } = useTodosStore((store) => store.actions);

  return (
    <header className={classes.header}>
      <StyledBadge badgeContent={undoneTodoCount} color="error">
        <Typography variant="h2">Todos</Typography>
      </StyledBadge>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        onChange={(event) => setTodoFilter(event.target.value)}
        placeholder="Search todos..."
        sx={{ flexGrow: 1, marginLeft: '40px' }}
        variant="standard"
      />
    </header>
  );
};
