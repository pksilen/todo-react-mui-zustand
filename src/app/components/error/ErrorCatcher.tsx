import { Button, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTodosStore } from '../../stores/todos/todosStore';
import classes from './ErrorCatcher.module.scss';

type Props = {
  children: ReactNode;
};

export default function ErrorCatcher({ children }: Props) {
  const hasError = useTodosStore((store) => store.hasError);
  const { clearError } = useTodosStore((store) => store.actions);

  const fallback = (
    <div className={classes.fallback}>
      <Typography variant="h3">Something went wrong.</Typography>
      {hasError && (
        <Button
          onClick={clearError}
          sx={{ marginTop: '20px' }}
          variant="contained"
        >
          Ok
        </Button>
      )}
    </div>
  );

  return (
    <ErrorBoundary fallback={fallback}>
      {hasError ? fallback : children}
    </ErrorBoundary>
  );
}
