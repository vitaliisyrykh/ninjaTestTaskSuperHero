import axios from 'axios';
import queryString from 'query-string';

const httpClient = axios.create({
  baseURL: 'http://localhost:3010/api'
});

export const createHero = async data => {
  const responsePromise = httpClient.post('/superhero/', data);
  return responsePromise;
};

export const getAllHeroes = async ({ limit = 5, offset = 0 }) => {
  const responsePromise = httpClient.get(
    `/superhero/?${queryString.stringify({ limit, offset })}`
  );
  return responsePromise;
};
export const updateHero = async ({updateBody,id})=>{
  const responsePromise = httpClient.patch(`/superhero/${id}`,updateBody)
  return responsePromise;
}; 

export const deleteHero = async ({ id }) => {
  const responsePromise = httpClient.delete(`/superhero/${id}`);
  return responsePromise;
};


export const deleteSuperPower = async ({ id, idHero }) => {
  const responsePromise = httpClient.delete(`/superhero/${idHero}/superpower/${id}`);
  return responsePromise;
};

export const createSuperPower = async ({id, createSuperPower})=>{
  console.log(id);
  const responsePromise = httpClient.post(`/superhero/${id}/superpower/`, createSuperPower);
  return responsePromise;
}
