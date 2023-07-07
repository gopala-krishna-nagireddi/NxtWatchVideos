import Styled from 'styled-components'

export const VideoItemDetailsContainer = Styled.div`
    min-height: 100vh;
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#ffffff' : '#181818'};
`

export const BodyContainer = Styled.div`
    display: flex;
    padding: 10px;
    font-family: "Roboto";
    min-height: 90vh;
`

export const MainContainer = Styled.div`
    
    background-color: #f8fafc;

    @media screen and (min-width: 768px){
        width: 80%;
    }
    @media screen and (min-width: 992px){
        width: 85%
    }

`

export const BannerContainer = Styled.div`
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#f1f1f1' : '#212121'};
    display: flex;
    align-items: center;
    padding: 0 30px;
`

export const CategoryBannerIconContainer = Styled.div`
        padding: 16px;
        background-color:${props =>
          props.isLightTheme === 'light' ? '#e2e8f0' : '#0f0f0f'};
        border-radius: 50%;
        margin-right: 20px;
`

export const BannerHeading = Styled.h1`
        color: ${props =>
          props.isLightTheme === 'light' ? '#000000' : '#ffffff'};
`

export const VideoDetailsContainer = Styled.div`
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#f9f9f9' : '#0f0f0f'};
    width: 100%;
    padding: 30px;
`
export const VideosFailureViewContainer = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 90vh;
`
export const FailureViewImg = Styled.img`
    margin-top: 15px;
    width: 90%;

    @media screen and (min-width: 768px){
        width: 60%;
    }

    @media screen and (min-width: 992px){
        width: 30%;
    }
`
export const FailurePageHeading = Styled.h1`
    color: ${props => (props.isLightTheme === 'light' ? '#0f0f0f' : '#ffffff')};
    margin-top: 16px;

`
export const FailureViewNote = Styled.p`
    font-size: 20px;
    color: #616e7c;
`

export const RetryButton = Styled.button`
    font-size: 16px;
    color: #ffffff;
    background-color: #4f46e5;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`
export const LoaderContainer = Styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const VideosListContainer = Styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`
