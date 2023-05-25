import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrenciesState {
  keys: string[];
  fullInfo: object;
}

const initialState: CurrenciesState = {
  keys: ['---'],
  fullInfo: {},
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<object>) => {
      state.keys = Object.keys(action.payload);
      state.fullInfo = action.payload;
    },
  },
});

export const { setCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;
