import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null as string | null,
    name: ''
  },
  reducers: {
    login (state, action: PayloadAction<{token: string}>) {
      return {
        ...state,
        token: action.payload.token
      }
    }
  }
})
