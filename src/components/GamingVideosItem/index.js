import {Link} from 'react-router-dom'

import {
  GamingVideoContainer,
  VideoImg,
  VideoTitle,
  ViewCount,
} from './StyledComponents'

import './index.css'

const GamingVideosItem = props => {
  const {videoDetails, theme} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <GamingVideoContainer>
      <Link className="video-link" to={`/videos/${id}`}>
        <div>
          <VideoImg src={thumbnailUrl} alt="video thumbnail" />
          <VideoTitle isLightTheme={theme}>{title}</VideoTitle>
          <ViewCount>{viewCount} Watching Worldwide</ViewCount>
        </div>
      </Link>
    </GamingVideoContainer>
  )
}

export default GamingVideosItem
