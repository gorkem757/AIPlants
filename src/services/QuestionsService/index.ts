import { baseApi } from '~services/BaseApiService';
import { IGetQuestionListItem } from './interfaces';

export const questionsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getQuestionsList: builder.query<IGetQuestionListItem[], any>({
      query: () => ({
        url: '/getQuestions',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetQuestionsListQuery } = questionsApi;
