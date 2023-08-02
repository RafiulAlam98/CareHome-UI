import { api } from "../api/apiSlice";

const featureApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeature: builder.query({
      query: () => `all-careHome`,
    }),
    getSingleFeature: builder.query({
      query: (id) => `all-careHome/${id}`,
    }),
  }),
});

export const { useGetFeatureQuery, useGetSingleFeatureQuery } = featureApi;
