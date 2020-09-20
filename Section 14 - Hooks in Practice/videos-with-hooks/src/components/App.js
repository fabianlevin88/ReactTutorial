import React, { useState, useEffect } from 'react';
import Route from './Route';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideo';

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])

  return (
    <div className="square ui container">
      <div className="ui raised segment">
        <Route path="/">
          <a id="ribbon" className="ui blue ribbon label" href='/'>Section 14 - Hooks in Practice</a>
        </Route>
        <SearchBar onFormSubmit={search}/>
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
