import { CssBaseline, ThemeProvider } from '@mui/material';
import classes from './App.module.scss';
import AddTodo from './components/addtodo/AddTodo';
import ViewControls from './components/controls/ViewControls';
import ErrorCatcher from './components/error/ErrorCatcher';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';
import { useControlsStore } from './stores/controls/controlsStore';

export default function App() {
  const theme = useControlsStore((store) => store.theme);

  return (
    <main className={classes.main}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <ViewControls />
        <ErrorCatcher>
          <Todos />
          <AddTodo />
        </ErrorCatcher>
      </ThemeProvider>
    </main>
  );
}
