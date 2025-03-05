import {
  IModalWindowContent,
  ISnackbarContent,
  TSnackbarAction,
  IToastContent,
} from 'components';

interface IsOpen {
  isOpen: boolean;
}

interface ModalWindow extends IsOpen {
  content: IModalWindowContent;
}

interface ISnackbar extends IsOpen {
  content: ISnackbarContent;
  action: TSnackbarAction;
}

interface Toast extends IsOpen {
  content: IToastContent;
}

export type ThemeMode = 'light' | 'dark';

export interface UiState {
  themeMode: ThemeMode;
  modalWindow: ModalWindow;
  snackbar: ISnackbar;
  toast: Toast;
}
