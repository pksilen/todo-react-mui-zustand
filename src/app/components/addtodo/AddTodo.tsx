import { Button } from '../../common/components/buttons/Button';
import { TextInput } from '../../common/components/inputs/TextInput';
import classes from './AddTodo.module.scss';
import { useTodoAdding } from './hooks/useTodoAdding';

export const AddTodo = () => {
  const { maybeAddTodo, todoTitle, setTodoTitle } = useTodoAdding();

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
