import React from "react";
import { AppNavbar } from "../organisms/AppNavbar";
import Box from "@mui/material/Box";
import { useMediaQuery, Theme } from "@mui/material";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <AppNavbar />
      <Box 
        sx={(theme) => ({
          p: 4,
          ...(isSmallScreen && {
            overflow: 'scroll',
            height: `calc(100vh - ${theme.spacing(14)})`,
          })
        })}
      >
        {children}
      </Box>
    </>
  );
};