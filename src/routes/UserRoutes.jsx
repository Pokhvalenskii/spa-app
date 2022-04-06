import { Routes, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
  reg,
  logout,
  login,
  setNewPassword
} from '../store/slices/userSlice';

import {
  addEmail,
  addPassword
} from '../store/slices/loginFormSlice';

import {
  setEmailStateSignUpForm,
  setPasswordStateSignUpForm,
  setRepeatPasswordStateSignUpForm
} from '../store/slices/signUpFormSlice'

import {
  setOldPasswordChangePasswordForm,
  setPasswordChangePasswordForm,
  setRepeatPasswordChangePasswordForm
} from '../store/slices/changePasswordFormSlice'

import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';
import ChangePass from '../components/ChangePass/ChangePass';
import Error404 from '../components/Error404/Error404';


const UserRoutes = () => {



  const dispatch = useDispatch();

  const signin = (data) => {
    dispatch(login(data))
  }
  const signup = (data) => {
    dispatch(reg(data));
  }
  const logOut = () => {
    dispatch(logout())
  }

  const changePassword = (data) => {
    dispatch(setNewPassword(data))
  }

  const setEmailStateSignInForm = (data) => {
    console.log('formLogin1')
    dispatch(addEmail({
      email: data
    }))
  }

  const setPasswordStateSignInForm = (data) => {
    console.log('formLogin2')
    dispatch(addPassword({
      password: data
    }))
  }

  const setEmailStateSignUp = (data) => {
    dispatch(setEmailStateSignUpForm({
      email: data
    }))
  }

  const setPasswordStateSignUp = (data) => {
    dispatch(setPasswordStateSignUpForm({
      password: data
    }))
  }

  const setRepeatPasswordStateSignUp = (data) => {
    dispatch(setRepeatPasswordStateSignUpForm({
      repeatPassword: data
    }))
  }

  const setOldPasswordChangePassword = (data) => {
    dispatch(setOldPasswordChangePasswordForm({
      oldPassword: data
    }))
  }
  const setPasswordChangePassword = (data) => {
    dispatch(setPasswordChangePasswordForm({
      password: data
    }))
  }
  const setRepeatPasswordChangePassword = (data) => {
    dispatch(setRepeatPasswordChangePasswordForm({
      repeatPassword: data
    }))
  }

  return (
    <Routes>
      <Route
        path='/signin'
        element={<Signin
          signin={signin}
          setEmailStateSignInForm={setEmailStateSignInForm}
          setPasswordStateSignInForm={setPasswordStateSignInForm}
        />}
      />
      <Route
        path='/signup'
        element={<Signup
          signup={signup}
          setEmailStateSignUp={setEmailStateSignUp}
          setPasswordStateSignUp={setPasswordStateSignUp}
          setRepeatPasswordStateSignUp={setRepeatPasswordStateSignUp}
        />}
      />
      <Route
        path='/'
        element={<ChangePass
          logOut={logOut}
          changePassword={changePassword}
          setOldPasswordChangePassword={setOldPasswordChangePassword}
          setPasswordChangePassword={setPasswordChangePassword}
          setRepeatPasswordChangePassword={setRepeatPasswordChangePassword}
        />}
      />
      <Route path='*' element={<Error404/>}/>
    </Routes>
  );
}

export default UserRoutes;