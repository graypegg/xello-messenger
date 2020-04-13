interface ActorResponse {
  messageId: number,
  userAccountId: number,
  userProfileId: number,
  firstName: string,
  lastName: string,
  displayName: string,
  avatarFileName: string,
  avatarUri: string,
  userType: 'Educator' | 'Student',
  canReplyToUser: boolean
}

interface MessageResponse {
  threadLength: number,
  recipientCount: number,
  hasAttachment: boolean,
  id: number,
  threadId: number,
  subject: string,
  body: string,
  createDateUtc: string,
  readDateUtc: string,
  sender: ActorResponse,
  recipients: ActorResponse[]
}

interface InboxResponse {
  data: {
    items: MessageResponse[]
    recordCount: number
  }
}
