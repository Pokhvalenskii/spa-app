import './ChangePass.css'
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom'
import { useUserInfo } from '../../hooks/useUserInfo';
import { useState } from 'react';
const ChangePass = (props) => {

  const { loggedIn, email } = useUserInfo();

  const [isValid, setIsValid] = useState(true)

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
    if(data.password === data.repeatPassword) {
      alert('password changed');
      setIsValid(true);
    } else {
      setIsValid(false);
    }

  }

  return loggedIn ? (
    <div className='changePass'>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='form__title'>CHANGE PASSWORD</p>
        <label className='form__label'>
          Old password
          <input
            type='password'
            className='form__input'
            {...register('oldPassword')}
            placeholder='old password'
          />
        </label>
        <label className='form__label'>
          Password
          <input
            className='form__input'
            type='password'
            placeholder='new password'
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
            placeholder='repeat password'
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
        <input className='form__submit' type='submit' value='Change'/>
      </form>
      <input
        type='button'
        className='form__input button'
        value='Log Out'
        onClick={() => {
          props.logOut()
        }}
      />
    </div>
  ) : (
    <Navigate replace to='/signin'/>
  )
}

export default ChangePass;