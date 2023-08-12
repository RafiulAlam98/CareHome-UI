import { api } from "../api/apiSlice";

const newsEventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNewsEvent: builder.query({
      query: (id) => `newsEvent/${id}`,
    }),
    addNewsEvent: builder.mutation({
      query: (data) => ({
        url: `careHome/news-event`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetNewsEventQuery, useAddNewsEventMutation } = newsEventApi;
