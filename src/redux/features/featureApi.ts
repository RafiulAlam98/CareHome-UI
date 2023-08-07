import { api } from "../api/apiSlice";

const featureApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeature: builder.query({
      query: () => `careHome/all-careHome`,
    }),
    getSingleFeature: builder.query({
      query: (id) => `careHome/all-careHome/${id}`,
    }),
  }),
});

export const { useGetFeatureQuery, useGetSingleFeatureQuery } = featureApi;
