import { api } from "../api/apiSlice";

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (id) => `reviews/${id}`,
    }),
    addReviews: builder.mutation({
      query: (data) => ({
        url: `careHome/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewsMutation } = reviewApi;
