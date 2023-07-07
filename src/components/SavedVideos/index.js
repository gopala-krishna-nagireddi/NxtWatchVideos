import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import TrendingVideosItem from '../TrendingVideosItemDetails'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  VideoItemDetailsContainer,
  BodyContainer,
  MainContainer,
  BannerContainer,
  CategoryBannerIconContainer,
  BannerHeading,
  VideoDetailsContainer,
  NoVideosViewContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosNote,
  VideosListContainer,
} from './StyledComponents'

import './index.css'

const SavedVideos = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {savedVideos, theme} = value

      const renderSavedVideos = () => (
        <VideosListContainer>
          {savedVideos.map(video => (
            <TrendingVideosItem videoDetails={video} key={video.id} />
          ))}
        </VideosListContainer>
      )

      const renderNoVideosView = () => (
        <NoVideosViewContainer>
          <NoVideosImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoVideosHeading isLightTheme={theme}>
            No saved videos found
          </NoVideosHeading>
          <NoVideosNote isLightTheme={theme}>
            You can save videos while watching them
          </NoVideosNote>
        </NoVideosViewContainer>
      )

      return (
        <VideoItemDetailsContainer isLightTheme={theme}>
          <Header />
          <BodyContainer>
            <NavigationSideBar activeTab="savedVideos" />
            <MainContainer>
              <BannerContainer data-testid="banner" isLightTheme={theme}>
                <CategoryBannerIconContainer isLightTheme={theme}>
                  <BiListPlus className="trending-icon" />
                </CategoryBannerIconContainer>
                <BannerHeading isLightTheme={theme}>Saved videos</BannerHeading>
              </BannerContainer>
              <VideoDetailsContainer
                data-testid="savedVideos"
                isLightTheme={theme}
              >
                {savedVideos.length !== 0
                  ? renderSavedVideos()
                  : renderNoVideosView()}
              </VideoDetailsContainer>
            </MainContainer>
          </BodyContainer>
        </VideoItemDetailsContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default SavedVideos
