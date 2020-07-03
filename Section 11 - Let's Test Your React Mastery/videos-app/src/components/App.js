import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount = () => {
    this.onTermSubmit('la super final el dia despues')
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({ 
      videos: response.data.items, 
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="square ui container">
        <div className="ui raised segment">
          <a id="ribbon" className="ui blue ribbon label" href='/#'>Section 11 - Let's Test Your React Mastery</a>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
        </div>
        <div className="ui raised segment">
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="six wide column">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
