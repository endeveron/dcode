import { ThemeProvider } from '@mui/material/styles';

import { darkMode, lightMode } from './muiTheme';
import { selectThemeMode } from 'store/ui';
import { useAppSelector } from 'store';
import { WithChildren } from 'common/types';

const MuiThemeProvider = ({ children }: WithChildren) => {
  const themeMode = useAppSelector(selectThemeMode);

  document.body.setAttribute('data-theme-mode', themeMode);

  return (
    <ThemeProvider theme={themeMode === 'dark' ? darkMode : lightMode}>
      {children}
    </ThemeProvider>
  );
};

export { MuiThemeProvider };
