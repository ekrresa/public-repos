import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PayloadType = {
  access_token: string;
};

const authAPI = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints(builder) {
    return {
      signIn: builder.query<PayloadType, string>({
        query: code => `/api/auth?code=${code}`,
        keepUnusedDataFor: 7200,
      }),
    };
  },
});

export const { useLazySignInQuery, useSignInQuery } = authAPI;
export default authAPI;
