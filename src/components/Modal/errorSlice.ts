import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  message?: string;
  isError: boolean;
}

export const initialState: ErrorState = {
  message: '',
  isError: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, { payload }: PayloadAction<ErrorState>) => {
      state.isError = payload.isError;

      if (payload.message) state.message = payload.message;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
