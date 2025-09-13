import { baseApi } from '~services/BaseApiService';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestionsList: builder.query<any, any>({
      query: () => ({
        url: '/getQuestions',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsListQuery } = questionsApi;
