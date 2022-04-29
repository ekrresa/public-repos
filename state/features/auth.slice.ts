import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const authAPISlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://github.com/login/oauth' }),
  endpoints(builder) {
    return {
      signIn: builder.query({
        query: () =>
          `/authorize?client_id=${CLIENT_ID}&redirect_uri=${BASE_URL}/login&scope="user repo"`,
      }),
    };
  },
});

export const { useLazySignInQuery } = authAPISlice;
export default authAPISlice;
