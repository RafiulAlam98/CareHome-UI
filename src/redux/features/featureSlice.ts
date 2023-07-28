import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {},
});

export default featureSlice.reducer;
