import { ListItemText as MuiListItemText } from '@mui/material';

export type ListItemTextProps = {
  className?: string;
  onDoubleClick?: () => void;
  text: string;
};

export const ListItemText = ({ className, onDoubleClick, text }: ListItemTextProps) => (
  <MuiListItemText className={className} onDoubleClick={onDoubleClick} primary={text} />
);
