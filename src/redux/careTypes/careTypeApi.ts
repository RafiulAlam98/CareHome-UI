import { api } from "../api/apiSlice";

const careTypeApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllCareTypes: builder.query({
      query: id => `careTypes/${id}`,
    }),
    addCareType: builder.mutation({
      query: data => ({
        url: `careTypes/add-types`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['careTypes'],
    }),
  }),
});

export const { useAddCareTypeMutation, useGetAllCareTypesQuery } = careTypeApi;
