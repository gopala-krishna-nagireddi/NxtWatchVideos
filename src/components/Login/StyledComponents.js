import Styled from 'styled-components'

export const LoginContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    min-height: 100vh;
    background-color: ${props =>
      props.isThemeLight === 'light' ? '#f9f9f9' : '#181818'};
`

export const UserLoginContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 18px;
    background-color: ${props =>
      props.isThemeLight === 'light' ? '#ffffff ' : '#0f0f0f'};
    border-radius: 12px;
    box-shadow: 0px 4px 16px 4px #e2e8f0;
    width: 80%;
    position: relative;

    @media screen and (min-width: 576px){
        width: 50%;
    }

    @media screen and (min-width: 768px){
        width: 30%;
    }
`
export const LoginLogo = Styled.img`
    width: 120px;
`

export const LoginForm = Styled.form`
    width: 100%;
`

export const InputContainer = Styled.div`
    display: flex;
    flex-direction: ${props => (props.checkbox ? 'row' : 'column')};
    align-items: ${props => props.checkbox && 'center'};
    margin: 20px 0;
    width: 100%;
    
`
export const Label = Styled.label`
    font-weight: 500;
    color: ${props => (props.isThemeLight === 'light' ? '#64748b' : '#ffffff')};
    margin-bottom: ${props => (props.checkbox ? '0' : '5px')};
    margin-left: ${props => (props.checkbox ? '5px' : '0')};
`
export const Input = Styled.input`
    padding: 10px 15px;
    font-size: 16px;
    border: 1px solid #64748b;
    outline: none;
    color: ${props => (props.isThemeLight === 'light' ? '#0f0f0f' : '#ffffff')};
    background-color: transparent;
`
export const LoginButton = Styled.button`
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    padding: 10px;
    color: #ffffff;
    background-color: #3b82f6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`

export const LoginErrorContainer = Styled.div`
    height: 30px;
    width: 100%;

`

export const LoginError = Styled.p`
    color: #ff0000;
`
