import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  access_token: string;
}

const initialState: AuthState = {
  access_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken(state, action: PayloadAction<string>) {
      state.access_token = action.payload;
    },
  },
});

export const { updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
