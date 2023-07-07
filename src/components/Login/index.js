import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import SavedVideosContext from '../../context/savedVideosContext'

import {
  LoginContainer,
  UserLoginContainer,
  LoginLogo,
  LoginForm,
  InputContainer,
  Label,
  Input,
  LoginButton,
  LoginErrorContainer,
  LoginError,
} from './StyledComponents'

class Login extends Component {
  state = {username: '', password: '', isPasswordVisible: false, loginError: ''}

  onInputUsername = event => {
    this.setState({username: event.target.value, loginError: ''})
  }

  onInputPassword = event => {
    this.setState({password: event.target.value, loginError: ''})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }))
  }

  onUserLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const userLoginDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userLoginDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})

      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({loginError: data.error_msg})
    }
  }

  render() {
    const {loginError, isPasswordVisible} = this.state
    const showPassword = isPasswordVisible ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <LoginContainer isThemeLight={theme}>
              <UserLoginContainer isThemeLight={theme}>
                <LoginLogo
                  src={
                    theme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onUserLogin}>
                  <InputContainer>
                    <Label htmlFor="username" isThemeLight={theme}>
                      USERNAME
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      onChange={this.onInputUsername}
                      isThemeLight={theme}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password" isThemeLight={theme}>
                      PASSWORD
                    </Label>
                    <Input
                      id="password"
                      type={showPassword}
                      placeholder="Password"
                      onChange={this.onInputPassword}
                      isThemeLight={theme}
                    />
                  </InputContainer>
                  <InputContainer checkbox>
                    <Input
                      id="checkbox"
                      type="checkbox"
                      checkbox
                      onChange={this.onClickShowPassword}
                      isThemeLight={theme}
                    />
                    <Label htmlFor="checkbox" isThemeLight={theme} checkbox>
                      Show Password
                    </Label>
                  </InputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                </LoginForm>
                <LoginErrorContainer>
                  {loginError !== '' && <LoginError>*{loginError}</LoginError>}
                </LoginErrorContainer>
              </UserLoginContainer>
            </LoginContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default Login
