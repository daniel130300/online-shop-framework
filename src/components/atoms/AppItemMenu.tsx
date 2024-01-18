import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface AppItemMenuProps {
  text: string;
  onClick: () => void
}

export const AppItemMenu: React.FC<AppItemMenuProps> = ({text, onClick}) => {
  return (
    <MenuItem key={text} onClick={onClick}>
      <Typography textAlign="center">{text}</Typography>
    </MenuItem>
  )
}

export default AppItemMenu;