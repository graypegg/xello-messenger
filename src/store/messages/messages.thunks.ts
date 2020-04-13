import { createAsyncThunk } from '@reduxjs/toolkit'
import { messagesApi } from '../../api/messages'
import { messagesSlice } from './messages.slice'
import { Actor } from './types'

function ActorResponseToActor (actorResponse: ActorResponse): Actor {
  return {
    avatar: `https://devimg.careercruising.com${actorResponse.avatarFileName}`,
    name: actorResponse.displayName,
    type: actorResponse.userType,
    id: {
      account: actorResponse.userAccountId,
      profile: actorResponse.userProfileId
    }
  }
}

export const hydrateInboxThunk = createAsyncThunk(
  'messages/hydrateInbox',
  async (payload: {from: number, to: number}, thunkAPI) => {
    const inbox = await messagesApi.getInbox(payload.from, payload.to)
    thunkAPI.dispatch(messagesSlice.actions.replaceInbox(
      inbox.items.map(message => ({
        id: message.id,
        body: message.body,
        subject: message.subject,
        sender: ActorResponseToActor(message.sender),
        recipients: message.recipients.map(ActorResponseToActor),
        status: {
          viewed: !!message.readDateUtc
        }
      }))
    ))

  }
)