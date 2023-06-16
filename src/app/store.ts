import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../components/CurrencyRatesTable/currencySlice';
import errorReducer from '../components/Modal/errorSlice';
import currenciesReducer from '../components/GenerateButton/currenciesSlice';

const store = configureStore({
  reducer: {
    currency: appReducer,
    error: errorReducer,
    currencies: currenciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
