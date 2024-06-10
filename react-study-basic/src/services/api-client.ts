import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // you can put headers below
    headers: {},
});

export {CanceledError};
