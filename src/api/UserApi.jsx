//TODO: this is where the API is going to be setup
import axios from 'axios';

const BASE_ENDPOINT = '3.139.106.132:8081/api';

export const questions = async (prompt) => {

    let data = JSON.stringify({
        "prompt": {prompt}
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://3.139.106.132:8081/api/questions`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

export const image = async () => {
    const response = await axios.post(`${BASE_ENDPOINT}/image`);
    return response.data;
}