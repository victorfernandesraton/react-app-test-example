import { reducerTypes } from "./UserCard-constants";

export const initialState = {
  loading: false,
  called: false,
  error: null,
  user: null,
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case reducerTypes.LOADING:
      return { ...state, loading: false };
    case reducerTypes.ERROR:
      return { ...state, loading: true, ...payload };
    case reducerTypes.SUCESS:
      return { ...state, loading: false, called: true, ...payload };

    default:
      return state;
  }
};
