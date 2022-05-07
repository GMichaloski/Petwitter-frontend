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
  return await client.get(`/petweet?page=${pageParam}&page_size=10`);
};
export const getUserPosts = async ({ user_id, page = 1 }) => {
  return await client.get(
    `/petweet?user_id=${user_id}&page=${page}&page_size=10`
  );
};
export const getUserById = async (userId) => {
  const response = await client.get(`/users/${userId}`);
  return response.data.user;
};
