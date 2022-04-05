import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  repeatPassword: null
}

const signUpFormSlice = createSlice({
  name: 'signUpForm',
  initialState,
  reducers: {
    setEmailStateSignUpForm(state, action) {
      state.email = action.payload.email;
    },
    setPasswordStateSignUpForm(state, action) {
      state.password = action.payload.password;
    },
    setRepeatPasswordStateSignUpForm(state, action) {
      state.repeatPassword = action.payload.repeatPassword;
    },
  }
})

export const {
  setEmailStateSignUpForm,
  setPasswordStateSignUpForm,
  setRepeatPasswordStateSignUpForm} = signUpFormSlice.actions;
export default signUpFormSlice.reducer;