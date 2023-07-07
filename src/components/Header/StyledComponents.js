import Styled from 'styled-components'

export const HeaderContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 10vh;
    background-color: ${props =>
      props.isThemeLight === 'light' ? '#f9f9f9' : '#181818'};
    @media screen and (min-width: 992px){
        padding: 20px 40px;
    }
`
export const WebsiteHeaderLogo = Styled.img`
    width: 128px;
    height: 32px;
    cursor: pointer;
`

export const NavbarButtons = Styled.button`
    width: 32px;
    height: 28px;
    padding: 0;
    margin: 5px;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: transparent;


    @media screen and (min-width: 768px){
        width: ${props => (props.logout ? '100px' : '32px')}
    }
`
export const NavIconsContainer = Styled.div`
    display: flex;
    align-items: center;
`

export const ProfileImg = Styled.img`
    width: 28px;
    display: none;
    @media screen and (min-width: 768px){
        display: block;
    }
`
export const PopupContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#ffffff' : '#000000'};
    padding: 30px;
    border-radius: 10px;  
`

export const PopupButton = Styled.button`
        font-size: 16px;
        padding: 8px 16px;
        color: ${props => (props.close ? '#475569' : '#ffffff')};
        border: 1px solid #475569;
        border: ${props =>
          props.close ? '1px solid #475569' : '1px solid #3b82f6'};
        background-color: ${props => (props.close ? 'transparent' : '#3b82f6')};
        outline: none;
        cursor: pointer;
        margin: 10px;
        border-radius: 5px;
`
export const LogoutInfo = Styled.p`
    font-size: 18px;
    color: ${props => (props.isLightTheme === 'light' ? '#0f0f0f' : '#ffffff')};
`
