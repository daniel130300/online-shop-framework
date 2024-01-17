import { useMediaQuery, Theme } from '@mui/material';
import { AppDesktopNavbar } from '../molecules/AppDesktopNavbar';
import { AppMobileNavbar } from '../molecules/AppMobileNavbar';

export const AppNavbar = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {isSmallScreen ? <AppMobileNavbar /> : <AppDesktopNavbar />}
    </>
  );
};