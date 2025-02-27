import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = import.meta.env.REACT_APP_API_KEY;
const tenantId = import.meta.env.REACT_APP_TENANT_ID;


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com',
    prepareHeaders: (headers) => {
      headers.set('x-zocom', apiKey);
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => '/menu',
    }),
    getSingleMenuItem: builder.query({
      query: (id) => `/menu/${id}`,
    }),
    placeOrder: builder.mutation({
      query: (order) => ({
        url: `/${tenantId}/orders`,
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const {
  useGetMenuQuery,
  useGetSingleMenuItemQuery,
  usePlaceOrderMutation,
} = apiSlice;
