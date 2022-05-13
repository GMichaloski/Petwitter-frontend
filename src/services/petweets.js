import client from "../providers/client";

export const postPetweet = async (data) => {
  try {
    const response = await client.post("/petweet", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getFeed = async ({ pageParam = 1 }) => {
  const results = await client.get(`/petweet?page=${pageParam}`);
  return { results, nextPage: pageParam + 1 };
};
export const getUserPosts = async ({ user_id, page = 1 }) => {
  const results = await client.get(`/petweet?id=${user_id}&page=${page}`);
  return { results, nextPage: page + 1 };
};
export const getUserById = async (userId) => {
  const response = await client.get(`/users/${userId}`);
  return response.data.user;
};
