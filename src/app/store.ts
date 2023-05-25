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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
