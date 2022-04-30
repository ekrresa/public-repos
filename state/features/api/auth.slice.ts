import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface AuthResponse {
  error?: string;
  error_description?: string;
  error_uri?: string;
  access_token?: string;
}

const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints(builder) {
    return {
      signIn: builder.query<AuthResponse, string>({
        query: code => `/api/auth?code=${code}`,
        keepUnusedDataFor: 7200,
      }),
    };
  },
});

export const { useLazySignInQuery, useSignInQuery } = authAPI;
export default authAPI;
