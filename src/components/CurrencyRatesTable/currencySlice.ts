import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EMPTY_CURRENCY, EMPTY_RATE } from '../../constants/common';

type CurrencyState = {
  date: string;
  base: string;
  rates: { [p: string]: string | number };
  isLoading: boolean;
};

type OmittedCurrencyState = Omit<CurrencyState, 'isLoading'>;

const initialState: CurrencyState = {
  date: EMPTY_CURRENCY,
  base: EMPTY_CURRENCY,
  rates: { [EMPTY_RATE]: EMPTY_RATE },
  isLoading: false,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setData: (state, { payload }: PayloadAction<OmittedCurrencyState>) => {
      state.date = payload.date;
      state.base = payload.base;
      state.rates = payload.rates;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
});

export const { setData, setLoading } = currencySlice.actions;

export default currencySlice.reducer;
