import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { pages } from '../../constants/pages';

export const AppMobileNavbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        position: 'fixed',
        zIndex: 100,
        bottom: 0,
        left: 0,
        width: '100%',
        justifyContent: 'flex-end'
      }}
    >
      {pages.map((page) => (
        <BottomNavigationAction key={page.title} label={page.title} icon={<page.icon/>} />
      ))}
    </BottomNavigation>
  );
}