import Styled from 'styled-components'

export const HomeContainer = Styled.div`
    min-height: 100vh;
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#f9f9f9' : '#181818'};
`

export const BodyContainer = Styled.div`
    display: flex;
    padding: 10px;
    font-family: "Roboto";
    min-height: 90vh;
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#ffffff' : '#181818'};
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
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    background-size: cover;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const BannerInfoContainer = Styled.div`
    @media screen and (min-width: 768px){
        width: 60%;
    }
`

export const VideosContainer = Styled.div`
    padding: 20px;
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#f9f9f9' : '#000000'};
`
export const BannerLogo = Styled.img`
    width: 170px;
    height: 40px;
`

export const BannerText = Styled.p`
    font-size: 24px;
    line-height: 2;
`

export const GetItNowBtn = Styled.button`
    color: #0f0f0f;
    font-size: 16px;
    font-weight: bold;
    background-color: #ffffff;
    padding: 10px;
    border: 1px solid #0f0f0f;
`

export const BannerCloseBtn = Styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    
`

export const SearchContainer = Styled.div`
    display: flex;
    align-items: center;
    height: 34px;
    border: ${props =>
      props.isLightTheme === 'light'
        ? '1px solid #94a3b8'
        : '1px solid #424242'};
    @media screen and (min-width: 768px){
        max-width: 60%;
    }
`

export const SearchButton = Styled.button`
    width: 70px;
    border: none;
    height: 32px;
    border-left: ${props =>
      props.isLightTheme === 'light'
        ? '1px solid #94a3b8'
        : '1px solid #424242'};
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#f9f9f9' : '#424242'};
`

export const SearchInput = Styled.input`
    flex-grow: 1;
    color: #616e7c;
    height: 32px;
    border: none;
    outline: none;
    border-radius: none;
    font-size: 16px;
    padding: 0 10px;
    background-color: transparent;
`

export const HomePageVideosList = Styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`

export const NoSearchResultsContainer = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    text-align: center;
`
export const NoSearchResultsImg = Styled.img`
    margin-top: 15px;
    width: 90%;

    @media screen and (min-width: 768px){
        width: 60%;
    }

    @media screen and (min-width: 992px){
        width: 50%;
    }
`
export const NoSearchResultHeading = Styled.h1`
    color: ${props => (props.isLightTheme === 'light' ? '#0f0f0f' : '#ffffff')};
    margin-top: 30px;

`
export const NoSearchResultNote = Styled.p`
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
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
`
