import { apiGithub } from "../../utils/requests";

export const getUser = async (username) => {
  const url = encodeURI(`/users/${username}`);
  try {
    const response = await apiGithub.get(url);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
