import Styled from 'styled-components'

export const HomeVideosListItem = Styled.li`
    color: #000000;
    width: 100%;
    margin-top: 22px;
    padding: 10px;

    @media screen and (min-width: 576px){
        width: 50%;
    }

    @media screen and (min-width: 768px){
        width: 50%;
    }

    @media screen and (min-width: 992px){
        width: 33.33%;
    }
`

export const ThumbnailImg = Styled.img`
    width: 100%;
`
export const ProfileAndVideoDetailsContainer = Styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
`
export const ProfileImg = Styled.img`
    width: 12%;
    margin-right: 10px;
`

export const VideoTitle = Styled.p`
    font-size: 15px;
    color: ${props => (props.isLightTheme === 'light' ? '#1e293b' : '#ffffff')};
    line-height: 1.5;
`

export const VideoDetail = Styled.p`
    font-size: 15px;
    color: #475569;
    line-height: 1;
`
