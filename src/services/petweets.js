import client from "../providers/client";

export const postPetweet = async (data) => {
  try {
    const response = await client.post("/petweet", data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
