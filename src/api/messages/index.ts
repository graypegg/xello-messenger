import api from '../api'

const makeMessagesURL = (route: string) => `messaging/${route}`

export const messagesApi = {
  getInbox (from: number = 0, to: number = 200) {
    return api.get<InboxResponse>(makeMessagesURL(`inbox/${from}/${to}`)).then(res => res.data.data)
  }
}
