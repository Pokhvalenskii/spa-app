import './Signin.css'
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom'
import { useUserInfo } from '../../hooks/useUserInfo';

const Signin = (props) => {

  const { loggedIn, email } = useUserInfo();

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    props.signin(data);
    alert('success');
  }
  return !loggedIn ? (
    <div className='signin'>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
      <p className='form__title'>LOGIN</p>
      <label className='form__label'>
        Email
        <input
          className='form__input'
          {...register('email')}
          placeholder='enter email'
          type='email'
        />
        {errors?.email && <p className='error'>{errors.email.message}</p>}
      </label>
      <label className='form__label'>
        Password
        <input
          className='form__input'
          type='password'
          placeholder='enter password'
          {...register('password', {
            required: 'Please enter your password',
            minLength: {
              value: 4,
              message: 'The password must contain between 4 and 10 characters and one capital letter.'
            },
            maxLength: {
              value: 10,
              message: 'The password must contain between 4 and 10 characters and one capital letter.'
            },
            pattern: {
              value: /(?=.*[A-Z])/,
              message: 'The password must contain between 4 and 10 characters and one capital letter.'
            }
          })}
        />
        {errors?.password && <p className='error'>{errors.password.message}</p>}
      </label>
      <input className='form__submit' type='submit' value='Enter'/>
    </form>
    <p>Don't have an account?
      <Link to='/signup'>SignUp</Link>
    </p>
    </div>
  ) : (
    <Navigate replace to='/'/>
  )
}

export default Signin;