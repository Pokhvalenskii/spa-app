import { Routes, Route, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addUser, removeUser } from '../store/slices/userSlice';
import Signin from '../components/Signin/Signin';
import Signup from '../components/Signup/Signup';
import ChangePass from '../components/ChangePass/ChangePass';
import Error404 from '../components/Error404/Error404';

const UserRoutes = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = (data) => {
    console.log('signIN', data)
    dispatch(addUser({
      email: data.email
    }))
    navigate('/');
  }

  const signup = (data) => {
    console.log('signUP')
    dispatch(addUser({
      email: data.email
    }))
    navigate('/');
  }

  const logOut = () => {
    dispatch(removeUser())
  }

  return (
    <Routes>
      <Route path='/signin' element={<Signin signin={signin}/>} />
      <Route path='/signup' element={<Signup signup={signup}/>} />
      <Route path='/' element={<ChangePass logOut={logOut}/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
  );
}

export default UserRoutes;