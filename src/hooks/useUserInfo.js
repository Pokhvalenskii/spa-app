import { useSelector } from 'react-redux';

export function useUserInfo() {
  const {email, token, id} = useSelector(state => state.user);

  return {
    loggedIn: !!email,
    email
  }
}