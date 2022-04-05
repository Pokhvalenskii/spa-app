import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import loginReducer from './slices/loginFormSlice'
import signUpFormSlice from "./slices/signUpFormSlice";
import changePasswordFormSlice from "./slices/changePasswordFormSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginForm: loginReducer,
    signUpForm: signUpFormSlice,
    changePassForm: changePasswordFormSlice
  }
})