import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import {
  HomeVideosListItem,
  ThumbnailImg,
  ProfileAndVideoDetailsContainer,
  ProfileImg,
  VideoTitle,
  VideoDetail,
} from './StyledComponents'

import './index.css'

const HomeVideosList = props => {
  const {videoDetails, theme} = props
  const {
    id,
    title,
    thumbnailUrl,
    publishedAt,
    channel,
    viewCount,
  } = videoDetails

  const {name, profileImageUrl} = channel
  return (
    <HomeVideosListItem>
      <Link to={`videos/${id}`} className="video-details-link">
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <ProfileAndVideoDetailsContainer>
          <ProfileImg src={profileImageUrl} alt={name} />
          <div>
            <VideoTitle isLightTheme={theme}>{title}</VideoTitle>
            <VideoDetail>{name}</VideoDetail>
            <VideoDetail bottom>
              {viewCount} views <BsDot />{' '}
              {formatDistanceToNow(new Date(publishedAt))}
            </VideoDetail>
          </div>
        </ProfileAndVideoDetailsContainer>
      </Link>
    </HomeVideosListItem>
  )
}

export default HomeVideosList
