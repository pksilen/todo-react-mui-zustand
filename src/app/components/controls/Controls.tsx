import { DarkMode, FormatListBulleted, GridOn, LightMode } from '@mui/icons-material';
import { ViewType, useControlsStore } from 'app/stores/controls/controlsStore';
import { useTodosStore } from 'app/stores/todos/todosStore';
import {
  IconRadioButtonGroup,
  IconRadioButtonProps
} from '../../common/components/buttons/IconRadioButtonGroup';
import { Switch } from '../../common/components/switches/Switch';
import classes from './Controls.module.scss';

type ViewMode = 'dark' | 'light';

export const Controls = () => {
  const { toggleShouldShowUndoneTodosOnly } = useTodosStore((store) => store.actions);

  const { switchToDarkMode, switchToLightMode, switchToTodosListView, switchToTodosTableView } =
    useControlsStore((store) => store.actions);

  const viewTypeButtons: IconRadioButtonProps<ViewType>[] = [
    { icon: <FormatListBulleted />, onClick: switchToTodosListView, value: 'list' },
    { icon: <GridOn />, onClick: switchToTodosTableView, value: 'table' }
  ];

  const viewModeButtons: IconRadioButtonProps<ViewMode>[] = [
    { icon: <LightMode />, onClick: switchToLightMode, value: 'light' },
    { icon: <DarkMode />, onClick: switchToDarkMode, value: 'dark' }
  ];

  return (
    <section className={classes.controls}>
      <IconRadioButtonGroup buttons={viewTypeButtons} initialValue="list" />
      <Switch label="Show undone only" onClick={toggleShouldShowUndoneTodosOnly} />
      <IconRadioButtonGroup buttons={viewModeButtons} initialValue="dark" />
    </section>
  );
};
