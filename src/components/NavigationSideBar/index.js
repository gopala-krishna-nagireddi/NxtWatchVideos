import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  SidebarContainer,
  CategoriesContainer,
  CategoriesContainer as ContactsContainer,
  CategoryContainer,
  CategoryName,
  ContactUsHeading,
  SocialMediaIconsContainer,
  SocialMediaImg,
  ContactsNote,
} from './StyledComponents'

import './index.css'

const NavigationSideBar = props => {
  const {activeTab} = props

  let activeCategory
  if (activeTab === undefined) {
    activeCategory = 'home'
  } else {
    activeCategory = activeTab
  }

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <SidebarContainer isLightTheme={theme}>
            <CategoriesContainer>
              <Link className="nav-link" to="/">
                <CategoryContainer active={activeCategory === 'home'}>
                  <AiFillHome className="category-icon" />
                  <CategoryName isLightTheme={theme}>Home</CategoryName>
                </CategoryContainer>
              </Link>
              <Link className="nav-link" to="/trending">
                <CategoryContainer active={activeCategory === 'trending'}>
                  <AiFillFire className="category-icon" />
                  <CategoryName isLightTheme={theme}>Trending</CategoryName>
                </CategoryContainer>
              </Link>

              <Link className="nav-link" to="/gaming">
                <CategoryContainer active={activeCategory === 'gaming'}>
                  <SiYoutubegaming className="category-icon" />
                  <CategoryName isLightTheme={theme}>Gaming</CategoryName>
                </CategoryContainer>
              </Link>

              <Link className="nav-link" to="/saved-videos">
                <CategoryContainer active={activeCategory === 'savedVideos'}>
                  <BiListPlus className="category-icon" />
                  <CategoryName isLightTheme={theme}>Saved videos</CategoryName>
                </CategoryContainer>
              </Link>
            </CategoriesContainer>
            <ContactsContainer contacts>
              <ContactUsHeading isLightTheme={theme}>
                CONTACT US
              </ContactUsHeading>
              <SocialMediaIconsContainer>
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaIconsContainer>
              <ContactsNote isLightTheme={theme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactsNote>
            </ContactsContainer>
          </SidebarContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default NavigationSideBar
