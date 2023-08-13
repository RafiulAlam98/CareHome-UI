import { api } from "../api/apiSlice";

const imageApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getImages: builder.query({
      query: (id) => `images/${id}`,
    }),
    addImages: builder.mutation({
      query: (data) => ({
        url: `images/add-image`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["images"],
    }),
  }),
});

export const { useGetImagesQuery, useAddImagesMutation } = imageApi;
