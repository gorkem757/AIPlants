import { baseApi } from '~services/BaseApiService';
import { IGetCategoriesResponse } from './interfaces';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCategoryList: builder.query<IGetCategoriesResponse, void>({
      query: () => ({
        url: '/getCategories',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoryListQuery } = categoriesApi;
