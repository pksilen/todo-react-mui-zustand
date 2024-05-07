import { useState } from 'react';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { Button } from '../../common/components/presentational/buttons/Button';
import { TextInput } from '../../common/components/presentational/inputs/TextInput';
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
      <TextInput
        label="Add new todo..."
        onChange={(event) => setTodoTitle(event.target.value)}
        value={todoTitle}
      />
      <Button className={classes.button} onClick={maybeAddTodo}>
        Add todo
      </Button>
    </section>
  );
};
