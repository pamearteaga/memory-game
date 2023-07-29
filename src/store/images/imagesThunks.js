import { imagesApi } from "../../api/imagesApi";
import { getImages } from "./imagesSlice";

export const getImagesList = () => {
  return async (dispatch) => {
    await imagesApi
      .get()
      .then((response) => {
        response.status === 200 && dispatch(getImages({ images: response.data.entries }));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
};
