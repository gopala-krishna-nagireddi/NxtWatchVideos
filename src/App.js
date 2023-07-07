import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import SavedVideosContext from './context/savedVideosContext'

// Replace your code here
class App extends Component {
  state = {savedVideo: [], websiteTheme: 'light'}

  addToSavedVideos = videoDetails => {
    const {savedVideo} = this.state

    const isVideoLiked = savedVideo.filter(
      video => video.id === videoDetails.id,
    )
    if (isVideoLiked.length === 0) {
      this.setState(prevState => ({
        savedVideo: [...prevState.savedVideo, videoDetails],
      }))
    } else {
      const updatedVideos = savedVideo.filter(
        video => video.id !== videoDetails.id,
      )

      this.setState({savedVideo: updatedVideos})
    }
  }

  changeTheme = () => {
    const {websiteTheme} = this.state

    if (websiteTheme === 'light') {
      this.setState({websiteTheme: 'dark'})
    } else {
      this.setState({websiteTheme: 'light'})
    }
  }

  render() {
    const {savedVideo, websiteTheme} = this.state

    return (
      <SavedVideosContext.Provider
        value={{
          savedVideos: savedVideo,
          addToSavedVideos: this.addToSavedVideos,
          theme: websiteTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/trending" component={TrendingVideos} />
            <ProtectedRoute exact path="/gaming" component={GamingVideos} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </SavedVideosContext.Provider>
    )
  }
}

export default App
