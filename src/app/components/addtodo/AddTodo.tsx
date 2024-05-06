import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useTodosStore } from '../../stores/todos/todosStore';
import classes from './AddTodo.module.scss';

export const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const { addTodo } = useTodosStore((store) => store.actions);

  const maybeAddTodo = () => {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  };

  return (
    <section className={classes.addTodo}>
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
    </section>
  );
};
