import { api } from "../api/apiSlice";

const awardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAward: builder.query({
      query: (id) => `allAward/${id}`,
    }),
    addAward: builder.mutation({
      query: (data) => ({
        url: `careHome/award`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["award"],
    }),
    deleteAward: builder.mutation({
      query: (id) => ({
        url: `allAward/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["award"],
    }),
  }),
});

export const { useGetAwardQuery, useAddAwardMutation, useDeleteAwardMutation } =
  awardApi;
