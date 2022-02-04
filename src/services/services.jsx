import axios from 'axios'

const appId = "61fd1be8d92d8509f9d4f114";
const url = "https://dummyapi.io/data/v1/";

export const getAllPosts = async () => {
  const dataPosts = await axios.get(`${url}post`, {
    headers: {
      'app-id': appId,
    }
  });
  return dataPosts
};