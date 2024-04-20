import { Button, TextField } from '@mui/material';
import classNames from './AddTodo.module.scss';
import useTodosStore from '../../model/todosStore';
import { useState } from 'react';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodosStore((store) => store.actions);

  function maybeAddTodo() {
    if (title) {
      addTodo(title);
      setTitle('');
    }
  }
  return (
    <div className={classNames.container}>
      <TextField
        id="addtodo"
        fullWidth
        label="Add new todo..."
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        variant="standard"
      />
      <Button
        color="primary"
        onClick={maybeAddTodo}
        variant="contained"
        sx={{ flexShrink: 0, marginLeft: '25px' }}
      >
        Add Todo
      </Button>
    </div>
  );
}
