import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import HomeVideosList from '../HomeVideosList'
import NavigationSideBar from '../NavigationSideBar'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  HomeContainer,
  BodyContainer,
  BannerInfoContainer,
  MainContainer,
  BannerContainer,
  VideosContainer,
  BannerLogo,
  BannerText,
  GetItNowBtn,
  BannerCloseBtn,
  SearchContainer,
  SearchButton,
  SearchInput,
  HomePageVideosList,
  NoSearchResultsContainer,
  NoSearchResultsContainer as VideosFailureViewContainer,
  NoSearchResultsImg,
  NoSearchResultsImg as FailureViewImg,
  NoSearchResultHeading,
  NoSearchResultHeading as FailurePageHeading,
  NoSearchResultNote,
  NoSearchResultNote as FailureViewNote,
  RetryButton,
  LoaderContainer,
} from './StyledComponent'

import './index.css'

const apiStatusCodes = {
  initial: 'INITIAL',
  inProgress: 'IN-PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusCodes.initial,
    videosList: [],
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getNxtWatchVideos()
  }

  getNxtWatchVideos = async () => {
    this.setState({apiStatus: apiStatusCodes.inProgress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookie.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const {videos} = data

      const updatedData = videos.map(videoDetails => ({
        id: videoDetails.id,
        title: videoDetails.title,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
        },
        thumbnailUrl: videoDetails.thumbnail_url,
        publishedAt: videoDetails.published_at,
        viewCount: videoDetails.view_count,
      }))

      this.setState({
        apiStatus: apiStatusCodes.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusCodes.failure})
    }
  }

  onClickRetryBtn = () => {
    this.getNxtWatchVideos()
  }

  getHomeVideosStatus = theme => {
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

  renderSuccessView = theme => {
    const {videosList} = this.state

    if (videosList.length !== 0) {
      return (
        <HomePageVideosList>
          {videosList.map(eachVideo => (
            <HomeVideosList
              videoDetails={eachVideo}
              key={eachVideo.id}
              theme={theme}
            />
          ))}
        </HomePageVideosList>
      )
    }
    return (
      <NoSearchResultsContainer>
        <NoSearchResultsImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchResultHeading isLightTheme={theme}>
          No Search results found
        </NoSearchResultHeading>
        <NoSearchResultNote>
          Try different key words or remove search filter
        </NoSearchResultNote>
        <RetryButton type="button">Retry</RetryButton>
      </NoSearchResultsContainer>
    )
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

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchVideos = () => {
    this.getNxtWatchVideos()
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <HomeContainer data-testid="home" isLightTheme={theme}>
              <Header />
              <BodyContainer isLightTheme={theme}>
                <NavigationSideBar activeTab="home" />
                <MainContainer>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerInfoContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>Buy NxtWatch Premium</BannerText>
                        <BannerText>prepaid plans with UPI</BannerText>
                        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
                      </BannerInfoContainer>
                      <BannerCloseBtn
                        type="button"
                        onClick={this.onCloseBanner}
                        data-testid="close"
                      >
                        <GrFormClose className="icon" />
                      </BannerCloseBtn>
                    </BannerContainer>
                  )}
                  <VideosContainer isLightTheme={theme}>
                    <SearchContainer isLightTheme={theme}>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onSearchInput}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onSearchVideos}
                        data-testid="searchButton"
                        isLightTheme={theme}
                      >
                        <AiOutlineSearch className="search-icon" />
                      </SearchButton>
                    </SearchContainer>
                    {this.getHomeVideosStatus(theme)}
                  </VideosContainer>
                </MainContainer>
              </BodyContainer>
            </HomeContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Home
