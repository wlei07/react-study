import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // you can put headers below, has compilation errors though.
    // headers: {},
});

export {CanceledError};
