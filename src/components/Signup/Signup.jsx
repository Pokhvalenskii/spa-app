import './Signup.css'
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import { useUserInfo } from '../../hooks/useUserInfo';

const Signup = (props) => {

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

  const [isValid, setIsValid] = useState(true)

  const onSubmit = (data) => {
    if(data.password === data.repeatPassword) {
      props.signup(data);
      setIsValid(true)
      alert('success');
    }
    else {
      setIsValid(false);
    }
  }



  return !loggedIn ? (
    <div className='signup'>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
      <p className='form__title'>REGISTRATION</p>
      <label className='form__label'>
        Email
        <input
          className='form__input'
          {...register('email', {
            required: 'Please enter your email'
          })}
          type='email'
          placeholder='enter email'
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
      <label className='form__label'>
        Repeat password
        <input
          className='form__input'
          type='password'
          placeholder='enter password'
          {...register('repeatPassword', {
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
        {errors?.repeatPassword && <p className='error'>{errors.repeatPassword.message}</p>}
        {!isValid && <p className='error'>Passwords must match</p>}
      </label>
      <input className='form__submit' type='submit' value='Enter'/>
    </form>
    <p>Do you already have an account?
      <Link to='/signin'>SignIn</Link>
    </p>
    </div>
  ) : (
    <Navigate replace to='/'/>
  )
}

export default Signup;