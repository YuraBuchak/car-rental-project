import axios from 'axios';

axios.defaults.baseURL = 'https://64fcad67605a026163aeb9a9.mockapi.io';

export const fetchCars = async page => {
  const { data } = await axios.get(`/catalog?p=${page}&limit=8`);
  return data;
};
