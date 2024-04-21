import {
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import {
  DarkMode,
  FormatListBulleted,
  GridOn,
  LightMode
} from '@mui/icons-material';
import classNames from './ViewControls.module.scss';
import useViewControlsStore, { ViewType } from '../../stores/viewControlsStore';
import { MouseEvent, useState } from 'react';
import useTodosStore from '../../stores/todosStore';

type ViewMode = 'dark' | 'light';

export default function ViewControls() {
  const [viewMode, setViewMode] = useState<ViewMode>('dark');
  const [viewType, setViewType] = useState<ViewType>('list');

  const { toggleShouldShowUndoneOnly } = useTodosStore(
    (store) => store.actions
  );

  const {
    switchToDarkMode,
    switchToLightMode,
    switchToTodosListView,
    switchToTodosTableView
  } = useViewControlsStore((store) => store.actions);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewType(event: MouseEvent<HTMLElement>, viewType: any) {
    setViewType(viewType);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function changeViewMode(event: MouseEvent<HTMLElement>, newViewMode: any) {
    setViewMode(newViewMode);
  }

  return (
    <div className={classNames.container}>
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
        control={<Switch onClick={toggleShouldShowUndoneOnly} />}
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
    </div>
  );
}
