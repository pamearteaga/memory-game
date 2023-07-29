import { auth } from "./authSlice";

export const authUser = ({ status, userName }) => {
  return async (dispatch) => {
    dispatch(
      auth({
        status: status,
        userName: userName,
      })
    );
  };
}