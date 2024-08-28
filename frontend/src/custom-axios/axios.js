import axios from "axios";

const firstInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

const secondInstance = axios.create({
    baseURL: 'http://localhost/backend/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export {firstInstance, secondInstance};