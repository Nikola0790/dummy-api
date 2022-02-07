import axios from "axios";

const appId = "61fd1be8d92d8509f9d4f114";
const url = "https://dummyapi.io/data/v1/";

export const getAllPosts = async (num) => {
  const dataPosts = await axios.get(`${url}post?page=${num}`, {
    headers: {
      "app-id": appId,
    },
  });
  return dataPosts;
};

export const getPostDetails = async (id) => {
  const data = await axios.get(`${url}post/${id}`, {
    headers: {
      "app-id": appId,
    },
  });
  return data;
};

// update post

export const updatePost = async (id, item) => {
  const data = await axios.put(`${url}post/${id}`, item, {
    headers: {
      "app-id": appId,
      /* Accept: "application/json",
      "Content-Type": "application/json", */
    },
  });
  return data;
};

// create post

export const createPost = async (post) => {
  const data = await axios.post(`${url}post/create`, post, {
    headers: {
      "app-id": appId,
    }
  });
  return data;
}


/*  export const getUserPost = async (id) => {
  const data = await axios.get(`${url}user/${id}/post`, {
    headers: {
      "app-id": appId,
    },
  });
  console.log(data);
  return data;
};  */