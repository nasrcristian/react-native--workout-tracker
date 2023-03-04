import axios from 'axios';

const url = 'https://63f4eaef3f99f5855dba5812.mockapi.io/exercises';

const getExcercises = async () => {
  const res = await axios.get(url);

  return res.data;
};

export default getExcercises;
