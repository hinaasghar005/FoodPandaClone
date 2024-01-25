import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import {baseUrl} from '../Theme/index';
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: baseUrl.api,
  }),
  endpoints: builder => ({
    post: builder.mutation({
      query: ({url, method, body, token}) => {
        console.log('API QUERY DATA:::::::::::::', url, method, body, token);
        return {
          url: url,
          method: method,
          body: body,
          headers: !token
            ? {
                Accept: 'application/json',
              }
            : {Authorization: `Bearer ${token}`},
        };
      },
    }),
    get: builder.mutation({
      query: ({url, method, data, token}) => {
        return {
          url: `${url}?${data}`,
          method,
          headers: {Authorization: token},
        };
      },
    }),
  }),
});

export const {usePostMutation, useGetMutation} = postApi;