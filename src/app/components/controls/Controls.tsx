import {
  DarkMode,
  FormatListBulleted,
  GridOn,
  LightMode
} from '@mui/icons-material';
import {
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import {
  useControlsStore,
  ViewType
} from '../../stores/controls/controlsStore';
import { useTodosStore } from '../../stores/todos/todosStore';
import classes from './ViewControls.module.scss';

type ViewMode = 'dark' | 'light';

export const Controls = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('dark');
  const [viewType, setViewType] = useState<ViewType>('list');

  const { toggleShouldShowUndoneTodosOnly } = useTodosStore(
    (store) => store.actions
  );

  const {
    switchToDarkMode,
    switchToLightMode,
    switchToTodosListView,
    switchToTodosTableView
  } = useControlsStore((store) => store.actions);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewType(event: MouseEvent<HTMLElement>, viewType: any) {
    setViewType(viewType);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewMode(event: MouseEvent<HTMLElement>, newViewMode: any) {
    setViewMode(newViewMode);
  }

  return (
    <section className={classes.section}>
      <ToggleButtonGroup
        exclusive
        onChange={changeViewType}
        size="small"
        value={viewType}
      >
        <ToggleButton onClick={switchToTodosListView} value="list">
          <FormatListBulleted />
        </ToggleButton>
        <ToggleButton onClick={switchToTodosTableView} value="table">
          <GridOn />
        </ToggleButton>
      </ToggleButtonGroup>
      <FormControlLabel
        control={<Switch onClick={toggleShouldShowUndoneTodosOnly} />}
        label="Show undone only"
      />
      <ToggleButtonGroup
        exclusive
        onChange={changeViewMode}
        size="small"
        value={viewMode}
      >
        <ToggleButton onClick={switchToLightMode} value="light">
          <LightMode />
        </ToggleButton>
        <ToggleButton onClick={switchToDarkMode} value="dark">
          <DarkMode />
        </ToggleButton>
      </ToggleButtonGroup>
    </section>
  );
};
