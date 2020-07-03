import axios from 'axios';

const KEY = 'AIzaSyAZeNuMx6PAXT5jqupmlccWaEW5M8ugIEg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});

