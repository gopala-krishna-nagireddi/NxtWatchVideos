import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike, BiListPlus} from 'react-icons/bi'

import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  VideoItemDetailsContainer,
  BodyContainer,
  VideoDetailsContainer,
  VideosFailureViewContainer,
  FailureViewImg,
  FailurePageHeading,
  FailureViewNote,
  RetryButton,
  LoaderContainer,
  VideoDescriptionDetailsContainer,
  VideoTitleHeading,
  ViewsAndLikeDislikeContainer,
  ViewsAndPublishedDate,
  CustomButton,
  SaveButton,
  HorizontalLine,
  ProfileDetailsContainer,
  ProfileImg,
  ProfileDetails,
  ProfileName,
  SubscribersCount,
  ProfileDescription,
} from './StyledComponents'

import './index.css'

const apiStatusCodes = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN-PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusCodes.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusCodes.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookie.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const videoDetails = data.video_details

      const updatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        description: videoDetails.description,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        channel: {
          name: videoDetails.channel.name,
          profileImgUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }

      this.setState({
        apiStatus: apiStatusCodes.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusCodes.failure})
    }
  }

  onLikeVideo = () => {
    const {isDisliked} = this.state

    if (isDisliked === true) {
      this.setState({isLiked: true, isDisliked: false})
    } else {
      this.setState({isLiked: true})
    }
  }

  onDislikeVideo = () => {
    const {isLiked} = this.state

    if (isLiked === true) {
      this.setState({isLiked: false, isDisliked: true})
    } else {
      this.setState({isDisliked: true})
    }
  }

  renderSuccessView = (savedVideos, addToSavedVideos, theme) => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      title,
      videoUrl,
      description,
      publishedAt,
      viewCount,
      channel,
    } = videoDetails
    const {name, profileImgUrl, subscriberCount} = channel

    const onClickSaveBtn = () => {
      addToSavedVideos(videoDetails)
      this.setState(prevState => ({isVideoSaved: !prevState.isVideoSaved}))
    }

    let videoPlayerHeight = ''
    const screenWidth = window.screen.width
    if (screenWidth < 576) {
      videoPlayerHeight = '300px'
    } else if (screenWidth >= 576 && screenWidth < 768) {
      videoPlayerHeight = '350px'
    } else if (screenWidth >= 768 && screenWidth < 992) {
      videoPlayerHeight = '450px'
    } else {
      videoPlayerHeight = '500px'
    }

    let customClassName = ''
    if (isLiked) {
      customClassName = 'liked'
    } else if (isDisliked) {
      customClassName = 'disliked'
    }

    const savedVideo = savedVideos.filter(video => video.id === videoDetails.id)

    const isVideoSaved = savedVideo.length !== 0

    return (
      <div>
        <ReactPlayer
          className="video-player"
          url={videoUrl}
          controls
          width="100%"
          height={videoPlayerHeight}
        />
        <VideoDescriptionDetailsContainer>
          <VideoTitleHeading isLightTheme={theme}>{title}</VideoTitleHeading>
          <ViewsAndLikeDislikeContainer>
            <ViewsAndPublishedDate>
              {viewCount} views <BsDot />{' '}
              {formatDistanceToNow(new Date(publishedAt))}
            </ViewsAndPublishedDate>
            <div>
              <CustomButton
                type="button"
                onClick={this.onLikeVideo}
                liked={customClassName === 'liked'}
              >
                <AiOutlineLike className="custom-icon" /> Like
              </CustomButton>
              <CustomButton
                type="button"
                onClick={this.onDislikeVideo}
                liked={customClassName === 'disliked'}
              >
                <BiDislike className="custom-icon" /> Dislike
              </CustomButton>
              <SaveButton
                type="button"
                onClick={onClickSaveBtn}
                isVideoSaved={isVideoSaved}
              >
                <BiListPlus className="custom-icon" />{' '}
                {isVideoSaved ? 'Saved' : 'Save'}
              </SaveButton>
            </div>
          </ViewsAndLikeDislikeContainer>
          <HorizontalLine />
          <ProfileDetailsContainer>
            <ProfileImg src={profileImgUrl} alt="channel logo" />
            <ProfileDetails>
              <ProfileName isLightTheme={theme}>{name}</ProfileName>
              <SubscribersCount>{subscriberCount} Subscribers</SubscribersCount>
            </ProfileDetails>
          </ProfileDetailsContainer>
          <ProfileDescription isLightTheme={theme}>
            {description}
          </ProfileDescription>
        </VideoDescriptionDetailsContainer>
      </div>
    )
  }

  onClickRetryBtn = () => {
    this.getVideoDetails()
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

  renderVideoStatus = (savedVideos, addToSavedVideos, theme) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCodes.success:
        return this.renderSuccessView(savedVideos, addToSavedVideos, theme)
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
          const {savedVideos, addToSavedVideos, theme} = value

          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              isLightTheme={theme}
            >
              <Header />
              <BodyContainer>
                <NavigationSideBar activeTab="nothing" />
                <VideoDetailsContainer>
                  {this.renderVideoStatus(savedVideos, addToSavedVideos, theme)}
                </VideoDetailsContainer>
              </BodyContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default VideoItemDetails
