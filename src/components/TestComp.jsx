import React, { useState } from 'react';
import {questionsAPI} from "../api/UserApi";

export default function TestComp() {
    const [question, setQuestion] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await questionsAPI();
        console.log(response);
    };

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question:
                <input type="text" value={question} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
