import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IGetQuestionListItem } from '~services/QuestionsService/interfaces';

// TODO: implement generic type for objects of useGetXYZQuery
export type GetStartedSectionProps = {
  data?: IGetQuestionListItem[];
  isLoading: boolean;
  hasError: FetchBaseQueryError | SerializedError | undefined;
};
