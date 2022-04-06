import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null
}

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    addEmail(state, action) {
      state.email = action.payload.email;
    },
    addPassword(state, action) {
      state.password = action.payload.password;
    }
  }
})

export const { addEmail, addPassword } = loginFormSlice.actions;
export default loginFormSlice.reducer;