import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ff8c01229e20404297ac0ebdbafbf5b2'
    },
});