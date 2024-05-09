import React from 'react';
import { Button } from 'app/common/components/buttons/Button';
import { IconButton } from 'app/common/components/buttons/IconButton';
import { useMediaQuery } from '../../../../common/hooks/useMediaQuery';
import classes from './TodoButton.module.scss';

type Props = {
  readonly icon: React.ReactNode;
  readonly onClick: () => void;
  readonly text: string;
};

export const TodoButton = ({ icon, onClick, text }: Props) => {
  const isPortraitPhone = useMediaQuery('(max-width:480px)');

  return isPortraitPhone ? (
    <IconButton icon={icon} onClick={onClick} />
  ) : (
    <Button className={classes.button} onClick={onClick} variant="text">
      {text}
    </Button>
  );
};
