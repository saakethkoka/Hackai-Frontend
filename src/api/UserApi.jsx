//TODO: this is where the API is going to be setup
import axios from 'axios';

const baseEndpoint = '3.139.106.132:8080/api';

export const questions = async () => {
    const response = await axios.post(`${baseEndpoint}/questions`);
    return response.data;
}

export const image = async () => {
    const response = await axios.post(`${baseEndpoint}/image`);
    return response.data;
}