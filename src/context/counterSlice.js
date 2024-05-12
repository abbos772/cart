import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc(state, action) {
      state.value += action.payload;
    },
    dec(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { inc, dec } = counterSlice.actions;
export default counterSlice.reducer;
