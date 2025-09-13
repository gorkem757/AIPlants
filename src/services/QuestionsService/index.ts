import { baseApi } from '~services/BaseApiService';
import { IGetQuestionListItem } from './interfaces';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestionsList: builder.query<IGetQuestionListItem[], void>({
      query: () => ({
        url: '/getQuestions',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetQuestionsListQuery } = questionsApi;
