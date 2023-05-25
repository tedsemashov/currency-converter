import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../slices/appSlice';
import errorReducer from '../slices/errorSlice';
import currenciesReducer from '../slices/currenciesSlice';

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
