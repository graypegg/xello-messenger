import api from '../api'
import { LoginResponse } from './types'

const makeLoginURL = (route: string) => `login/${route}`

export const loginApi = {
  postLogin(username: string, password: string) {
    return api.post<LoginResponse>(
      makeLoginURL(`local`),
      {
        username,
        password,
        remember: true
      }
    ).then(res => res.data)
  }
}
