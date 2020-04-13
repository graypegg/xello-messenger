import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi } from '../../api/user'
import { userSlice } from './user.slice'

export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async (payload: { username: string, password: string }, thunkAPI) => {
    const user = await loginApi.postLogin(payload.username, payload.password)
    thunkAPI.dispatch(userSlice.actions.login({ token: user.token }))
  }
)