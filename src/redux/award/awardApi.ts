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
  }),
});

export const { useGetAwardQuery, useAddAwardMutation } = awardApi;
