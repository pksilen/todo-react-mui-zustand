import { Button, TextField } from '@mui/material';
import classNames from './AddTodo.module.scss';
import useTodosStore from '../../stores/todosStore';
import { useState } from 'react';

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState('');
  const { addTodo } = useTodosStore((store) => store.actions);

  function maybeAddTodo() {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  }

  return (
    <div className={classNames.container}>
      <TextField
        id="addtodo"
        fullWidth
        label="Add new todo..."
        onChange={(event) => setTodoTitle(event.target.value)}
        value={todoTitle}
        variant="standard"
      />
      <Button
        color="primary"
        onClick={maybeAddTodo}
        variant="contained"
        sx={{ flexShrink: 0, marginLeft: '25px' }}
      >
        Add todo
      </Button>
    </div>
  );
}
