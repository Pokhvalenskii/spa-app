import { Routes, Route, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addUser, removeUser, register } from '../store/slices/userSlice';
import { addEmail, addPassword } from '../store/slices/loginFormSlice';

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
  const navigate = useNavigate();
  const signin = (data) => {
    console.log('signIN', data)
    dispatch(addUser({
      email: data.email
    }))
    navigate('/');
  }

  const signup = (data) => {
    console.log('signUP')
    dispatch(addUser({
      email: data.email
    }))
    navigate('/');
  }

  const registerFormStateEmail = (data) => {
    dispatch(addEmail({
      email: data
    }))
  }

  const registerFormStatePass = (data) => {
    dispatch(addPassword({
      password: data
    }))
  }

  const logOut = () => {
    dispatch(removeUser())
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
          registerFormStateEmail={registerFormStateEmail}
          registerFormStatePass={registerFormStatePass}
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