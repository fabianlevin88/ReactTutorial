import axios from 'axios';

const KEY = 'AIzaSyBAJADjT4KJNg_2Ur42loIlFt9cokm2GSs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});

