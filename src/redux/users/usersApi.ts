import { api } from "../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignUp: builder.mutation({
      query: (data) => ({
        url: `auth/sign-up/create-user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    userSignIn: builder.mutation({
      query: (data) => ({
        url: `auth/login/user-login`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useUserSignUpMutation, useUserSignInMutation } = userApi;
