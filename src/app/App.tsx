import { CssBaseline, ThemeProvider } from '@mui/material';
import { AddTodo } from 'app/components/addtodo/AddTodo';
import { Controls } from 'app/components/controls/Controls';
import { ErrorBoundary } from 'app/components/errorboundary/ErrorBoundary';
import { Header } from 'app/components/header/Header';
import { Todos } from 'app/components/todos/Todos';
import { useControlsStore } from 'app/stores/controls/controlsStore';
import classes from './App.module.scss';

export default function App() {
  const theme = useControlsStore((store) => store.theme);

  return (
    <main className={classes.main}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Controls />
        <ErrorBoundary>
          <Todos />
          <AddTodo />
        </ErrorBoundary>
      </ThemeProvider>
    </main>
  );
}
