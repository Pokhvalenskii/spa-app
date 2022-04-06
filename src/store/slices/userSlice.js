import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  status: null
}

export const reg = createAsyncThunk(
  'user/reg',
  async (data, {dispatch}) => {
    await setTimeout(() => {
      console.log('TIMEOUT')
      dispatch(addUser(data))
    }, 2000)
  }
)

export const logout = createAsyncThunk(
  'user/logout',
  async (_, {dispatch}) => {
    await setTimeout(() => {
      dispatch(removeUser())
    }, 2000)
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (data, {dispatch}) => {
    await setTimeout(() => {
      dispatch(addUser(data))
    }, 2000)
  }
)

export const changePassword = createAsyncThunk(
  'user/changePass',
  async (data, {dispatch}) => {
    await setTimeout(() => {
      dispatch(setNewPassword(data))
    }, 2000)
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.email = null;
    },
    setNewPassword(state, action) {
      state.password = action.payload.password;
    }
  },
  extraReducers: {
    [reg.pending]:(state) => {
      state.status = {isLoading: 'load'};
    },
    [reg.fulfilled]:(state) => {
      state.status = {isLoading: true};
    }
  }
})

export const { addUser, removeUser, register, setNewPassword} = userSlice.actions;
export default userSlice.reducer;