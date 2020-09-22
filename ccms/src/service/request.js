import axios from 'axios';
import { BASE_URL } from './config';

// creates axios cleant with base url
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

/** makes api request with a promise,
 * this is the common method which all modules 
 * should call where api is needed
 */
const makeApiRequest = async (options) => {
  return new Promise((resolve, reject) => {
    axiosClient(options)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default makeApiRequest;
