import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'yum-fNyMwyY4gQ8NxMpB';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com',
    prepareHeaders: (headers) => {
      headers.set('x-zocom', apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => '/menu',
    }),
  }),
});

export const {
  useGetMenuQuery,
} = apiSlice;


// {
//   "id": "1asr",
//   "name": "katarina"
// }