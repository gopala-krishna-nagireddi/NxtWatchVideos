import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  VideoDetailsContainer,
  VideoImg,
  ProfileImg,
  ProfileContainer,
  ViewsAndPublishedDateContainer,
  ViewsPublishedDate,
  VideoTitle,
  ProfileName,
} from './StyledComponents'

import './index.css'

const TrendingVideosItem = props => {
  const {videoDetails, theme} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name, profileImgUrl} = channel

  return (
    <Link className="video-item-link" to={`/videos/${id}`}>
      <VideoDetailsContainer>
        <VideoImg src={thumbnailUrl} alt="video thumbnail" />
        <ProfileContainer>
          <ProfileImg src={profileImgUrl} alt="profile" />
          <ViewsAndPublishedDateContainer>
            <VideoTitle isLightTheme={theme}>{title}</VideoTitle>
            <ProfileName>{name}</ProfileName>
            <ViewsPublishedDate>
              {viewCount} views <BsDot />{' '}
              {formatDistanceToNow(new Date(publishedAt))}
            </ViewsPublishedDate>
          </ViewsAndPublishedDateContainer>
        </ProfileContainer>
      </VideoDetailsContainer>
    </Link>
  )
}

export default TrendingVideosItem
