const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  status: "not-authenticated",
  userName: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action) => {
      const { status, userName } = action.payload;
      return { ...state, status, userName };
    },
  },
});

export const { auth } = authSlice.actions;

export default authSlice.reducer;