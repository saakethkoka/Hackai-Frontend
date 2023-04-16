//TODO: this is where the API is going to be setup
import axios from 'axios';

const BASE_ENDPOINT = '3.139.106.132:8081/api';

export const questionsAPI = (prompt) => {
    let data = JSON.stringify({
        "prompt": prompt
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

    return axios.request(config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export const imageAPI = async (questions, prompt) => {
    // 3.139.106.132:8081/api/questions
    let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url: `http://3.139.106.132:8081/api/image`,
        headers: {
            'Content-Type': 'application/json'
        },
        data : {
            "questions" : questions,
            "prompt" : prompt
        }
    };



    return axios.request(config)
        .then((response) => {
            return response.data;
        }
        )
        .catch((error) => {
            console.log(error);
        }
        );
}