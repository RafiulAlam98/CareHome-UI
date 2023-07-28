import { api } from "../api/apiSlice";

const featureApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFeature: builder.query({
      query: () => `all-careHome`,
    }),
  }),
});

export const { useGetFeatureQuery } = featureApi;
