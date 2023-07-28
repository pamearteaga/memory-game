const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  status: "not-authenticated",
  uid: null,
  name: "",
  lastname: "",
  email: "",
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = action.payload.status;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.errorMessage = action.payload.errorMessage;
    },
    logout: (state, action) => {
      state.status = action.payload.status;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.errorMessage = action.payload.errorMessage;
    },
    loading: (state) => {
      state.status = "loading";
    },
  },
});

export const { login, logout, loading } = authSlice.actions;

export default authSlice.reducer;