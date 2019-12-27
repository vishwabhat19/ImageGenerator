import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID e5fc57a48891287706ff730b87a4c8f29b5de621fd378bc8ebd952e37a0cd478'}
}
);