const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  images: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    getImages: (state, action) => {
      const { images } = action.payload;
      return { ...state, images };
    },
    loadingImages: (state) => {
      state.isLoading = true;
    },
  },
});

export const { getImages, loadingImages } = imagesSlice.actions;

export default imagesSlice.reducer;