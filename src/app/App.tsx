import React from 'react';
import Header from '../todos/views/header/Header';
import classNames from './App.module.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Todos from '../todos/views/todos/Todos';
import AddTodo from '../todos/views/addtodo/AddTodo';
import ViewControls from '../todos/views/viewcontrols/ViewControls';
import useViewControlsStore from '../todos/model/viewControlsStore';

export default function App() {
  const theme = useViewControlsStore((store) => store.theme);

  return (
    <div className={classNames.container}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <ViewControls />
        <Todos />
        <AddTodo />
      </ThemeProvider>
    </div>
  );
}
