import axios from 'axios';
import { BASE_URL, endPoints } from './config';
import makeApiRequest from './request';

/**
 * this uses a promise, which makes a request, which internally uses axios 
 */
export const getUsers = async () => {
    return new Promise((resolve, reject) => {
        const params = {}
        const header = null
        const options = { url: endPoints.users, method: 'GET', params, header }

        makeApiRequest(options)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    });

}
/**
 * this returns a promise which uses axios directly
 */
export const getPosts = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL + endPoints.posts}`)
            .then(function (response) {
                resolve(response)
            })
            .catch(function (error) {
                reject(error)
            })
    });
}