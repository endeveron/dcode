import { createTheme } from '@mui/material/styles';

import colors from 'styles/_colors.scss';
import fonts from 'styles/_fonts.scss';

const typography = {
  fontFamily: fonts.fontFamily,
};

export const lightMode = createTheme({
  typography,

  palette: {
    mode: 'light',
    text: {
      primary: colors.lTextPrimary,
      secondary: colors.lTextSecondary,
      disabled: colors.lTextDisabled,
    },
    primary: {
      main: colors.lPrimaryMain,
      light: colors.lPrimaryLight,
      dark: colors.lPrimaryDark,
    },
    secondary: {
      main: colors.lSecondaryMain,
      light: colors.lSecondaryLight,
      dark: colors.lSecondaryDark,
    },
    success: {
      main: colors.lSuccessMain,
      light: colors.lSuccessLight,
      dark: colors.lSuccessDark,
    },
    error: {
      main: colors.lErrorMain,
      light: colors.lErrorLight,
      dark: colors.lErrorDark,
    },
    warning: {
      main: colors.lWarningMain,
      light: colors.lWarningLight,
      dark: colors.lWarningDark,
    },
    info: {
      main: colors.lInfoMain,
      light: colors.lInfoLight,
      dark: colors.lInfoDark,
    },
    background: {
      default: colors.lBgDefault,
      paper: colors.lBgPaper,
    },
  },
});

export const darkMode = createTheme({
  typography,

  palette: {
    mode: 'dark',
    text: {
      primary: colors.dTextPrimary,
      secondary: colors.dTextSecondary,
      disabled: colors.dTextDisabled,
    },
    primary: {
      main: colors.dPrimaryMain,
      light: colors.dPrimaryLight,
      dark: colors.dPrimaryDark,
    },
    secondary: {
      main: colors.dSecondaryMain,
      light: colors.dSecondaryLight,
      dark: colors.dSecondaryDark,
    },
    success: {
      main: colors.dSuccessMain,
      light: colors.dSuccessLight,
      dark: colors.dSuccessDark,
    },
    error: {
      main: colors.dErrorMain,
      light: colors.dErrorLight,
      dark: colors.dErrorDark,
    },
    warning: {
      main: colors.dWarningMain,
      light: colors.dWarningLight,
      dark: colors.dWarningDark,
    },
    info: {
      main: colors.dInfoMain,
      light: colors.dInfoLight,
      dark: colors.dInfoDark,
    },
    background: {
      default: colors.dBgDefault,
      paper: colors.dBgPaper,
    },
  },
});
