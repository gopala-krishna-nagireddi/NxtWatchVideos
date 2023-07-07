import Styled from 'styled-components'

export const SidebarContainer = Styled.div`
    display:none;
    @media screen and (min-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20%;
        max-height: 90vh;
        background-color: ${props =>
          props.isLightTheme === 'light' ? '#ffffff' : '#181818'};
    }
    @media screen and (min-width: 992px){
        width: 15%
    }

`

export const CategoriesContainer = Styled.ul`
    padding: 0;
    padding: ${props => (props.contacts ? '0 15px' : null)};
    list-style-type: none;
    margin: 0;

`

export const CategoryContainer = Styled.li`
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: ${props => (props.active ? '#ff0000' : '#000000')};
    background-color: ${props => (props.active ? '#cccccc' : 'transparent')};
    
`
export const CategoryName = Styled.p`
    font-size: 14px;
    margin: 8px;
    color: ${props => (props.isLightTheme === 'light' ? '#000000' : '#ffffff')};
`

export const ContactUsHeading = Styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${props => (props.isLightTheme === 'light' ? '#000000' : '#ffffff')};
`
export const SocialMediaIconsContainer = Styled.div`
    display: flex;
    align-items: center;
`
export const SocialMediaImg = Styled.img`
    width: 30px;
    margin-right: 10px;
`
export const ContactsNote = Styled.p`
    color: ${props => (props.isLightTheme === 'light' ? '#475569' : '#ffffff')};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
`
