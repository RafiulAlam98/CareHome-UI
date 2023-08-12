import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://care-home-backend.vercel.app/api/v1/",
  }),
  tagTypes: ["comments", "users", "reviews", "newsEvent", "award"],
  endpoints: () => ({}),
});
