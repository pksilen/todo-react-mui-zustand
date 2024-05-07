import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useTodosStore } from 'app/stores/todos/todosStore';
import { Button } from '../../common/components/buttons/Button';
import classes from './ErrorBoundary.module.scss';

type Props = {
  children: ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => {
  const hasError = useTodosStore((store) => store.hasError);
  const { clearError } = useTodosStore((store) => store.actions);

  const fallback = (
    <div className={classes.fallback}>
      <Typography variant="h3">Something went wrong.</Typography>
      {hasError && (
        <Button className={classes.button} onClick={clearError}>
          Ok
        </Button>
      )}
    </div>
  );

  return (
    <ReactErrorBoundary fallback={fallback}>{hasError ? fallback : children}</ReactErrorBoundary>
  );
};
