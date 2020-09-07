import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)
  const defaultSearch = 'la super final el dia despues';

  useEffect(() => {
    onTermSubmit(defaultSearch)
  }, [])

  const onTermSubmit = async term => {
    const KEY = 'AIzaSyDW_Z03OJDYqboJf0_TcoXFGk3ya2bj-Ag'

    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        key: `${KEY}`
      }
    })

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  return (
    <div className="square ui container">
      <div className="ui raised segment">
        <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 14 - Hooks in Practice</a>
        <SearchBar onFormSubmit={onTermSubmit}/>
      </div>
      <div className="ui raised segment">
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="six wide column">
              <VideoList 
                videos={videos} 
                onVideoSelect={setSelectedVideo} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
