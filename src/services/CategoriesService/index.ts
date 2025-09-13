import { baseApi } from '~services/BaseApiService';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCategoryList: builder.query<any, any>({
      query: () => ({
        url: '/getCategories',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoryListQuery } = categoriesApi;
