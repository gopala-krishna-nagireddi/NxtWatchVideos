import Styled from 'styled-components'

export const VideoDetailsContainer = Styled.li`
    display: flex;
    flex-direction: column;
    width:100%;
    margin-bottom: 70px;

    @media screen and (min-width: 576px){
        flex-direction: row;
        align-items: flex-start;
    }
    
`

export const VideoImg = Styled.img`
    width: 100%;

    @media screen and (min-width: 576px){
        width: 50%;
    }
    
`

export const ProfileImg = Styled.img`
    width: 50px;
    margin: 0 20px;

    @media screen and (min-width: 576px){
        display: none;
    }
    
`

export const ProfileContainer = Styled.div`
    display: flex;
    align-items: center;
    @media screen and (min-width: 576px){
        margin-left: 24px;
    }
`

export const ViewsAndPublishedDateContainer = Styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileName = Styled.p`
    color:#64748b;
    margin: 5px 0;
`

export const ViewsPublishedDate = Styled.p`
    color:#64748b;
    font-size: 14px;
    margin: 5px 0;
`

export const VideoTitle = Styled.p`
    font-size: 16px;
    font-weight: 500;
    color: ${props => (props.isLightTheme === 'light' ? '#000000' : '#ffffff')};
`
