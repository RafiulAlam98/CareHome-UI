import { api } from "../api/apiSlice";

const featureApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeature: builder.query({
      query: () => `careHome/all-careHome`,
    }),
    deleteSingleCareHome: builder.mutation({
      query: (id) => ({
        url: `careHome/all-careHome/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["careHome"],
    }),
    getSingleFeature: builder.query({
      query: (id) => `careHome/all-careHome/${id}`,
    }),
    addFeature: builder.mutation({
      query: (data) => ({
        url: `careHome/add-careHome`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["careHome"],
    }),
  }),
});

export const {
  useGetFeatureQuery,
  useGetSingleFeatureQuery,
  useAddFeatureMutation,
  useDeleteSingleCareHomeMutation,
} = featureApi;
