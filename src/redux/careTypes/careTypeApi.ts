import { api } from "../api/apiSlice";

const careTypeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCareTypes: builder.query({
      query: (id) => `/${id}`,
    }),
    addCareType: builder.mutation({
      query: (data) => ({
        url: ``,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["careTypes"],
    }),
  }),
});

export const {  } = careTypeApi;
