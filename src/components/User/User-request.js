import { apiGithub } from "../../utils/requests";

export const getUser = async (username) => {
  const url = encodeURI(`/users/${username}`);
  try {
    const response = await apiGithub.get(url);
    return response;
  } catch (error) {
    if (error?.response) {
      // caso tenha tido resposta
      return Promise.reject(error?.response);
    } else if (error?.request) {
      // caso tenha feito requets mas não temjha resposta
      return Promise.reject(error.request);
    } else {
      // caso não tenha nem saido a request
      return Promise.reject(error);
    }
  }
};
