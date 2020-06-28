import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search',
    headers: { Authorization: 'Client-ID S-PmFl9lqRd43H9F8kIYNEJoCUzbfMskhOZMg7UQle0' }
});