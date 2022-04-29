import { configureStore } from '@reduxjs/toolkit';
import authAPISlice from '../features/auth.slice';

export const store = configureStore({
  reducer: {
    [authAPISlice.reducerPath]: authAPISlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(authAPISlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
