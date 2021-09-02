import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export const postsAPI = {
  async getPosts() {
    const response = await instance.get(`/posts`);
    return response.data;
  }
};
