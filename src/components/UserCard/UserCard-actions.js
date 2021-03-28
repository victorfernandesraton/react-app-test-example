import { getUser } from "../User/User-request";

import { reducerTypes } from "./UserCard-constants";

export const fetchUser = async (dispatch, { username }) => {
  dispatch({ type: reducerTypes.LOADING });
  try {
    const { data, status } = await getUser(username);
    dispatch({ type: reducerTypes.SUCESS, payload: { user: data } });
  } catch (error) {
    dispatch({ type: reducerTypes.ERROR, payload: { error } });
  }
};
