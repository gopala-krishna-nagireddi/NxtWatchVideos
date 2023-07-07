import Styled from 'styled-components'

export const NotFoundMainContainer = Styled.div`
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

export const NotFoundContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
`

export const NotFoundImg = Styled.img`
    width: 70%;
    
    @media screen and (min-width: 768px){
        width: 50%;
    }

    @media screen and (min-width: 992px){
        width: 35%;
    }
`
export const NotFoundHeading = Styled.h1`
    color: ${props => (props.isLightTheme === 'light' ? '#0f0f0f' : '#ffffff')};

`

export const NotFoundNote = Styled.p`
    color:#475569;

`
