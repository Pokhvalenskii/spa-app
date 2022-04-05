import { useSelector } from 'react-redux';

export function useUserInfo() {
  const {email, placeEmail} = useSelector(state => state.user);

  return {
    loggedIn: !!email,
    email,
    placeEmail
  }
}

export function useFormLoginInfo() {
  const {email, password} = useSelector(state => state.loginForm);

  return {
    email,
    password
  }
}

export function useFormSignUpInfo() {
  const {email, password, repeatPassword} = useSelector(state => state.signUpForm);

  return {
    email,
    password,
    repeatPassword
  }
}

export function useFormChangePassInfo() {
  const {oldPassword, password, repeatPassword} = useSelector(state => state.changePassForm);

  return {
    oldPassword,
    password,
    repeatPassword
  }
}