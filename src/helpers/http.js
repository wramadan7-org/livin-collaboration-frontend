// eslint-disable-next-line import/no-named-default
import { default as axios } from 'axios';

// const { BASE_URL } = process.env;

const http = (token = false) => axios.create({
  // baseURL: BASE_URL,
  baseURL: 'http://localhost:8080/v1',
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

export default http;
