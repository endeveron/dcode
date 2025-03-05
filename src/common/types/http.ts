import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface IDescription {
  status?: string | number;
  message?: string;
}

export interface Response<T> extends IDescription {
  data: T;
}

export interface ResponseError extends IDescription {
  data?: string;
}

export type ApiError = FetchBaseQueryError | SerializedError | undefined;
