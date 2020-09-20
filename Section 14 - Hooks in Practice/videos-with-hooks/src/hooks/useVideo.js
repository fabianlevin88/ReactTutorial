import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = () => {
    const [videos, setVideos] = useState([]);
    const defaultSearch = 'la super final el dia despues';

    useEffect(() => {
        search(defaultSearch)
      }, [defaultSearch])

    const search = async term => {
        const KEY = 'AIzaSyDW_Z03OJDYqboJf0_TcoXFGk3ya2bj-Ag'
        const response = await youtube.get('/search', {
            params: {
            q: term,
            part: 'snippet',
            key: `${KEY}`
            }
        })

        setVideos(response.data.items);
    }

    return [videos, search]
}

export default useVideos;
