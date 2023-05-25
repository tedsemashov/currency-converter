import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EMPTY_CURRENCY } from '../../constants/common';

interface CurrenciesState {
  keys: string[];
  fullInfo: object;
}

const initialState: CurrenciesState = {
  keys: [EMPTY_CURRENCY],
  fullInfo: {},
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies: (state, { payload }: PayloadAction<object>) => {
      state.keys = Object.keys(payload);
      state.fullInfo = payload;
    },
  },
});

export const { setCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;
