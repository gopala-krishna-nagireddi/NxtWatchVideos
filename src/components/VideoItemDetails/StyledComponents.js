import Styled from 'styled-components'

export const VideoItemDetailsContainer = Styled.div`
    min-height: 100vh;
    background-color: ${props =>
      props.isLightTheme === 'light' ? '#f9f9f9' : '#0f0f0f'};
`

export const BodyContainer = Styled.div`
    display: flex;
    font-family: "Roboto";
    min-height: 90vh;
    
`
export const VideoDetailsContainer = Styled.div`
    width: 100%;
    padding: 30px;

    @media screen and (min-width: 768px){
        width: 80%;
    }
    @media screen and (min-width: 992px){
        width: 85%;
    }
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
export const VideoDescriptionDetailsContainer = Styled.div`
    padding: 10px;
    margin-top: 18px;

    @media screen and (min-width: 768px){
        padding: 0;
    }
`

export const VideoTitleHeading = Styled.p`
    font-size: 22px;
    color: ${props => (props.isLightTheme === 'light' ? '#212121' : '#ffffff')};
`

export const ViewsAndLikeDislikeContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const ViewsAndPublishedDate = Styled.p`
    font-size: 16px;
    color: #616e7c;
`

export const CustomButton = Styled.button`
    color: ${props => (props.liked ? '#2563eb' : '#64748b')};

    background-color: transparent;
    border: none;
    margin-right: 30px;
    font-size: 18px;
    font-weight: ${props => (props.liked ? 500 : 'normal')};
    padding: 0;
    outline: none;
    cursor: pointer;
`
export const SaveButton = Styled.button`
    color: ${props => (props.isVideoSaved ? '#3b82f6' : '#616e7c')};
    background-color: transparent;
    border: none;
    margin-right: 30px;
    font-size: 18px;
    font-weight: ${props => (props.isVideoSaved ? 500 : 'normal')};
    padding: 0;
    outline: none;
    cursor: pointer;
`

export const HorizontalLine = Styled.hr`
    margin: 20px 0;
`
export const ProfileDetailsContainer = Styled.div`
    display: flex;
    align-items: center;

`

export const ProfileImg = Styled.img`
    width: 60px;
`

export const ProfileDetails = Styled.div`
    margin-left: 30px;
`

export const ProfileName = Styled.p`
    color: ${props => (props.isLightTheme === 'light' ? '#000000' : '#ffffff')};

`

export const SubscribersCount = Styled.p`
    font-size: 14px;
    color: #616e7c;

`

export const ProfileDescription = Styled.p`
    font-size: 16px;
    color: ${props => (props.isLightTheme === 'light' ? '#475569' : '#ffffff')};

    @media screen and (min-width: 768px){
        margin-left: 90px;
    }
`
