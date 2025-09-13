import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: move to a constants file
const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => headers,
  }),
  endpoints: () => ({}),
});
