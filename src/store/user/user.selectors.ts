import { RootState } from '..';

export function isLoggedIn (state: RootState) {
  return !!state.user.token
}
