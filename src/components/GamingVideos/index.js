import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import GamingVideosItem from '../GamingVideosItem'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  VideoItemDetailsContainer,
  BodyContainer,
  MainContainer,
  BannerContainer,
  CategoryBannerIconContainer,
  BannerHeading,
  VideoDetailsContainer,
  VideosFailureViewContainer,
  FailureViewImg,
  FailurePageHeading,
  FailureViewNote,
  RetryButton,
  LoaderContainer,
  VideosListContainer,
} from './StyledComponents'

import './index.css'

const apiStatusCodes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

class GamingVideos extends Component {
  state = {apiStatus: apiStatusCodes.initial, videosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusCodes.inProgress})

    const jwtToken = Cookie.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const videosDetails = data.videos

      const updatedData = videosDetails.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      this.setState({
        apiStatus: apiStatusCodes.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusCodes.failure})
    }
  }

  renderSuccessView = theme => {
    const {videosList} = this.state

    return (
      <VideosListContainer>
        {videosList.map(video => (
          <GamingVideosItem videoDetails={video} key={video.id} theme={theme} />
        ))}
      </VideosListContainer>
    )
  }

  onClickRetryBtn = () => {
    this.getGamingVideos()
  }

  renderFailureView = theme => (
    <VideosFailureViewContainer>
      <FailureViewImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailurePageHeading isLightTheme={theme}>
        Oops! Something Went Wrong
      </FailurePageHeading>
      <FailureViewNote>
        We are having some trouble to complete your request. Please try again.
      </FailureViewNote>
      <RetryButton type="button" onClick={this.onClickRetryBtn}>
        Retry
      </RetryButton>
    </VideosFailureViewContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="Circles" color="#00306e" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoStatus = theme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCodes.success:
        return this.renderSuccessView(theme)
      case apiStatusCodes.failure:
        return this.renderFailureView(theme)
      case apiStatusCodes.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <VideoItemDetailsContainer isLightTheme={theme}>
              <Header />
              <BodyContainer>
                <NavigationSideBar activeTab="gaming" />
                <MainContainer>
                  <BannerContainer data-testid="banner" isLightTheme={theme}>
                    <CategoryBannerIconContainer isLightTheme={theme}>
                      <SiYoutubegaming className="trending-icon" />
                    </CategoryBannerIconContainer>
                    <BannerHeading isLightTheme={theme}>Gaming</BannerHeading>
                  </BannerContainer>
                  <VideoDetailsContainer
                    data-testid="gaming"
                    isLightTheme={theme}
                  >
                    {this.renderVideoStatus(theme)}
                  </VideoDetailsContainer>
                </MainContainer>
              </BodyContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default GamingVideos
