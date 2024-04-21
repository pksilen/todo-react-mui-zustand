import {
  Badge,
  BadgeProps,
  InputAdornment,
  styled,
  TextField,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import classNames from './Header.module.scss';
import useTodosStore, { getUndoneTodoCount } from '../../stores/todosStore';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '16px',
    padding: '2px 4px',
    right: -3,
    top: 15
  }
}));

export default function Header() {
  const undoneTodoCount = useTodosStore((store) => getUndoneTodoCount(store));
  const { setTodoFilter } = useTodosStore((store) => store.actions);

  return (
    <header className={classNames.header}>
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
}
