import { SxProps } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import { Theme } from '@mui/material/styles';

interface AppButtonProps extends ButtonProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export const AppButton: React.FC<AppButtonProps> = ({ children, sx, onClick, ...buttonProps }) => {
  return (
    <Button
      {...buttonProps}
      onClick={onClick}
      sx={((theme) => ({
        color: theme.palette.primary.contrastText,
        ...sx
      })) as SxProps<Theme>}
    >
      {children}
    </Button>
  );
};

export default AppButton;