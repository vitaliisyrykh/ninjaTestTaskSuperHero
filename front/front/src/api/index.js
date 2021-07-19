import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3010/api'
});

export const createHero = async data => {
  const responsePromise = httpClient.post('/superhero/', data);
  return responsePromise;
};
