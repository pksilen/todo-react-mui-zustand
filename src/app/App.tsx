import { CssBaseline, ThemeProvider } from '@mui/material';
import classes from './App.module.scss';
import { AddTodo } from './components/addtodo/AddTodo';
import { Controls } from './components/controls/Controls';
import { ErrorBoundary } from './components/errorboundary/ErrorBoundary';
import { Header } from './components/header/Header';
import { Todos } from './components/todos/Todos';
import { useControlsStore } from './stores/controls/controlsStore';

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
