import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError } from 'axios';
import { store } from '../../app/store';
import { logout } from '../auth/slice';
import { Repository } from '../types';

const githubAPI = createApi({
  reducerPath: 'githubAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  endpoints(builder) {
    return {
      fetchUserData: builder.query<any, string>({
        //@ts-expect-error
        async queryFn(args: string) {
          return await getUserRepositories(args);
        },
        keepUnusedDataFor: 7200,
      }),
    };
  },
});

export const { useFetchUserDataQuery } = githubAPI;
export default githubAPI;

async function getUserRepositories(access_token: string) {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const reposUrl = response.data.repos_url;
    const reposResponse = await axios.get<Repository[]>(
      reposUrl + '?sort=created&per_page=20',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    return { data: reposResponse.data };
  } catch (error) {
    let err = error as AxiosError;
    if (err.response?.status === 401) {
      store.dispatch(logout());
    }

    return {
      error: err.response?.data || err.message,
    };
  }
}
