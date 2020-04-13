import { Message } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hydrateInboxThunk } from './messages.thunks'

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    inbox: [] as Message[],
    loading: false
  },
  reducers: {
    replaceInbox (state, action: PayloadAction<Message[]>) {
      return {
        ...state,
        inbox: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(hydrateInboxThunk.pending, (state, action) => {
      return {
        ...state,
        loading: true
      }
    })
    builder.addCase(hydrateInboxThunk.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false
      }
    })
    builder.addCase(hydrateInboxThunk.rejected, (state, action) => {
      return {
        ...state,
        loading: false
      }
    })
  }
})
