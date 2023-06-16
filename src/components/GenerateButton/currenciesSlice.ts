import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EMPTY_CURRENCY } from '../../constants/common';
import { Currency } from './GenerateButton';

type CurrenciesState = {
  keys: string[];
  fullInfo: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};

const initialState: CurrenciesState = {
  keys: [EMPTY_CURRENCY],
  fullInfo: {},
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrencies: (state, { payload }: PayloadAction<Currency>) => {
      state.keys = Object.keys(payload);
      state.fullInfo = payload;
    },
  },
});

export const { setCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;
