export interface Actor {
  avatar: string
  name: string
  type: 'Educator' | 'Student',
  id: {
    account: number,
    profile: number
  }
}

export interface Message {
  id: number
  body: string
  subject: string
  sender: Actor
  recipients: Actor[],
  status: {
    viewed: boolean
  }
}
