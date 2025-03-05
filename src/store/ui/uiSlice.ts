import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { ThemeMode, UiState } from 'store/ui';
import {
  IModalWindowContent,
  ISnackbarContent,
  TSnackbarAction,
  IToastContent,
} from 'components';

const modalWindowInitialState = {
  content: {
    title: '',
    message: '',
  },
  isOpen: false,
};

const snackbarInitialState = {
  action: null,
  content: {
    message: '',
    btnTitle: '',
  },
  isOpen: false,
};

const toastInitialState = {
  content: {
    message: '',
  },
  isOpen: false,
};

const initialState: UiState = {
  themeMode: 'dark',
  modalWindow: modalWindowInitialState,
  snackbar: snackbarInitialState,
  toast: toastInitialState,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    },

    openModalWindow: (state, action: PayloadAction<IModalWindowContent>) => {
      state.modalWindow.content = action.payload;
      state.modalWindow.isOpen = true;
    },
    closeModalWindow: (state) => {
      state.modalWindow = modalWindowInitialState;
    },

    openSnackbar: (state, action: PayloadAction<ISnackbarContent>) => {
      state.snackbar.content.message = action.payload.message;
      state.snackbar.content.btnTitle = action.payload.btnTitle;
      state.snackbar.isOpen = true;
    },
    setSnackbarAction: (state, action: PayloadAction<TSnackbarAction>) => {
      state.snackbar.action = action.payload;
    },
    closeSnackbar: (state) => {
      state.snackbar = snackbarInitialState;
    },

    openToast: (state, action: PayloadAction<IToastContent>) => {
      state.toast.content = action.payload;
      state.toast.isOpen = true;
    },
    closeToast: (state) => {
      state.toast = toastInitialState;
    },

    clearUiState: () => initialState,
  },
});

const uiReducer = uiSlice.reducer;

export const {
  setThemeMode,
  openModalWindow,
  closeModalWindow,
  openSnackbar,
  setSnackbarAction,
  closeSnackbar,
  openToast,
  closeToast,
} = uiSlice.actions;

export const selectThemeMode = (state: RootState) => state.ui.themeMode;
export const selectModalWindowContent = (state: RootState) =>
  state.ui.modalWindow.content;
export const selectModalWindowIsOpen = (state: RootState) =>
  state.ui.modalWindow.isOpen;
export const selectSnackbarAction = (state: RootState) =>
  state.ui.snackbar.action;
export const selectSnackbarContent = (state: RootState) =>
  state.ui.snackbar.content;
export const selectSnackbarIsOpen = (state: RootState) =>
  state.ui.snackbar.isOpen;
export const selectToastContent = (state: RootState) => state.ui.toast.content;
export const selectToastIsOpen = (state: RootState) => state.ui.toast.isOpen;

export { uiReducer };
