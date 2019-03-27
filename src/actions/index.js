import axios from 'axios';
const URL = 'https://api.github.com';

export function allCompsLease(){
    const request = axios.get(`${URL}/users`)
                    .then(response => response.data)
    return {
        type: 'GET_COMPSLEASE',
        payload: request
    }
}