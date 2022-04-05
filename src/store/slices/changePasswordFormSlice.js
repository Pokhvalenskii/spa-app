import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oldPassword: null,
  password: null,
  repeatPassword: null
}

const changePasswordFormSlice = createSlice({
  name: 'signInForm',
  initialState,
  reducers: {
    setOldPasswordChangePasswordForm(state, action) {
      state.oldPassword = action.payload.oldPassword;
    },
    setPasswordChangePasswordForm(state, action) {
      state.password = action.payload.password;
    },
    setRepeatPasswordChangePasswordForm(state, action) {
      state.repeatPassword = action.payload.repeatPassword;
    }
  }
})

export const {
  setOldPasswordChangePasswordForm,
  setPasswordChangePasswordForm,
  setRepeatPasswordChangePasswordForm
} = changePasswordFormSlice.actions
export default changePasswordFormSlice.reducer