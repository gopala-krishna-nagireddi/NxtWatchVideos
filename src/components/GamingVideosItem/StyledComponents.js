import Styled from 'styled-components'

export const GamingVideoContainer = Styled.li`
    width: 50%;
    padding: 10px;
    margin-bottom: 30px;

    @media screen and (min-width: 576px){
        width: 33.33%
    }

`

export const VideoImg = Styled.img`
    width: 100%;
`

export const VideoTitle = Styled.p`
    color: ${props => (props.isLightTheme === 'light' ? '#0f0f0f' : '#ffffff')};
    font-weight: 500;
`

export const ViewCount = Styled.p`
    color: #475569;
`
