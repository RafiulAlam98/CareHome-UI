import { api } from "../api/apiSlice";

const tourApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllTour: builder.query({
      query: () => `tour/allTour`,
    }),
    addtour: builder.mutation({
      query: (data) => ({
        url: `tour/add-tour`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tour"],
    }),
    deleteTour: builder.mutation({
      query: (id) => ({
        url: `tour/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tour"],
    }),
  }),
});

export const { useGetAllTourQuery, useAddtourMutation, useDeleteTourMutation } =
  tourApi;
