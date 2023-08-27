import { api } from '../api/apiSlice';

const careTypeApi = api.injectEndpoints({
  endpoints: builder => ({
    addCareType: builder.mutation({
      query: ({ id, data }) => ({
        url: `careHome/all-careHome/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['careTypes'],
    }),
  }),
});

export const { useAddCareTypeMutation } = careTypeApi;
