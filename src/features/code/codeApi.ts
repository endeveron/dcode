import { Response } from 'common/types/http';
import { IGenerateCodeReq } from 'features/code/codeTypes';
import { api } from 'store/api';

export const codeApi = api.injectEndpoints({
  endpoints: (build) => ({
    generateCode: build.mutation<string, IGenerateCodeReq>({
      query: (data) => ({
        url: 'dcode/generate-code',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res: Response<string>) => res.data,
    }),
  }),
});

export const { useGenerateCodeMutation } = codeApi;
