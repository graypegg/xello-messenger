import axios from 'axios'
import { store } from '../store'

const api = axios.create({
  baseURL: 'https://cc3dev.careercruising.com/api/',
  headers: {
    Culture: 'en-US'
  }
})

api.interceptors.request.use(req => {
  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: store.getState().user.token
    }
  }
})

export default api