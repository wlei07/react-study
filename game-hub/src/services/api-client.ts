import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '22394d94d9334e9192a8a34d9199a592'
    }
});
