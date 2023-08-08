import { createSlice } from "@reduxjs/toolkit";

type IAccessToken = {
  email: string | null;
  accesstoken: string | null;
};
const initialState: IAccessToken = {
  email: null,
  accesstoken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      (state.accesstoken = localStorage.getItem("accesstoken")),
        (state.email = action.payload);
    },
    removeUser: (state, action) => {
      state.accesstoken = action.payload;
      state.email = null;
    },
  },
});

export const { getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
