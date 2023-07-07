import SavedVideosContext from '../../context/savedVideosContext'
import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'

import {
  NotFoundMainContainer,
  BodyContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundNote,
} from './StyledComponents'

const NotFound = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {theme} = value

      return (
        <NotFoundMainContainer isLightTheme={theme}>
          <Header />
          <BodyContainer>
            <NavigationSideBar activeTab="not-found" />
            <NotFoundContainer>
              <NotFoundImg
                src={
                  theme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isLightTheme={theme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote isLightTheme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundNote>
            </NotFoundContainer>
          </BodyContainer>
        </NotFoundMainContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default NotFound
