import { configureStore } from '@reduxjs/toolkit';
import authAPI from '../features/auth.slice';

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(authAPI.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
