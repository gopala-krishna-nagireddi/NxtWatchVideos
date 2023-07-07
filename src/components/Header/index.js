import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSun} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import Cookie from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  HeaderContainer,
  WebsiteHeaderLogo,
  NavbarButtons,
  NavIconsContainer,
  ProfileImg,
  PopupContainer,
  PopupButton,
  LogoutInfo,
} from './StyledComponents'

import './index.css'

const Header = props => (
  <SavedVideosContext.Consumer>
    {value => {
      const {changeTheme, theme} = value

      const onLogoutUser = () => {
        Cookie.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickChangeTheme = () => {
        changeTheme()
      }

      return (
        <HeaderContainer isThemeLight={theme}>
          <Link to="/">
            <WebsiteHeaderLogo
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <NavIconsContainer>
            <NavbarButtons
              type="NavbarButtons"
              data-testid="theme"
              onClick={onClickChangeTheme}
              isThemeLight={theme}
            >
              {theme === 'light' ? (
                <FaMoon className="nav-icon moon" />
              ) : (
                <BiSun className="nav-icon sun" />
              )}
            </NavbarButtons>
            <NavbarButtons type="NavbarButtons" isThemeLight={theme}>
              <GiHamburgerMenu className={`nav-icon hamberger-menu ${theme}`} />
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </NavbarButtons>
            <Popup
              modal
              trigger={
                <NavbarButtons type="NavbarButtons" logout isThemeLight={theme}>
                  <FiLogOut className={`nav-icon logout-icon ${theme}`} />
                  <p className={`logout-btn ${theme}`}>Logout</p>
                </NavbarButtons>
              }
              className={`popup-content ${theme}Theme`}
            >
              {close => (
                <PopupContainer isLightTheme={theme}>
                  <LogoutInfo isLightTheme={theme}>
                    Are you sure, you want to logout
                  </LogoutInfo>
                  <div>
                    <PopupButton type="button" close onClick={() => close()}>
                      Cancel
                    </PopupButton>
                    <PopupButton type="button" onClick={onLogoutUser}>
                      Confirm
                    </PopupButton>
                  </div>
                </PopupContainer>
              )}
            </Popup>
          </NavIconsContainer>
        </HeaderContainer>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default withRouter(Header)
