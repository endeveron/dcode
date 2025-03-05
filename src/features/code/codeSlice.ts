import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICodeSlice } from 'features/code';
import { RootState } from 'store';

const initialState: ICodeSlice = {
  sliderValue: 3,
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setSliderValue: (state, action: PayloadAction<number>) => {
      state.sliderValue = action.payload;
    },

    resetCodeState: (_) => initialState,
  },
});

const codeReducer = codeSlice.reducer;

export const { setSliderValue, resetCodeState } = codeSlice.actions;

export const selectCodeSliderValue = (state: RootState): number =>
  state.code.sliderValue;

export { codeReducer };
