import { useModalWindow, useToast } from 'components';
import { MuiThemeProvider } from 'features/mui/MuiThemeProvider';
import { Routes } from 'routes/Routes';

import './App.scss';

const App = () => {
  const { ModalWindow } = useModalWindow({});
  const { Toast } = useToast();

  return (
    <MuiThemeProvider>
      <Toast />
      <ModalWindow />
      <Routes />
    </MuiThemeProvider>
  );
};

export { App };
