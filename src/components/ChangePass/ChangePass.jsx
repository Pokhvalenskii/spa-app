import './ChangePass.css'
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom'
import { useUserInfo, useFormChangePassInfo } from '../../hooks/hooks';
import { useEffect, useState } from 'react';
const ChangePass = (props) => {

  const { loggedIn } = useUserInfo();
  const { oldPassword, password, repeatPassword } = useFormChangePassInfo();
  const [isValid, setIsValid] = useState(true)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {
      errors
    }
  } = useForm({
    mode: 'onChange'
  });

  useEffect(() => {
    props.setOldPasswordChangePassword(watch('oldPassword'))
  },[watch('oldPassword')])

  useEffect(() => {
    props.setPasswordChangePassword(watch('password'))
  },[watch('password')])

  useEffect(() => {
    props.setRepeatPasswordChangePassword(watch('repeatPassword'))
  },[watch('repeatPassword')])

  const onSubmit = (data) => {
    if(data.password === data.repeatPassword) {
      props.changePassword(data)
      setIsValid(true);
      reset({
        oldPassword: '',
        password: '',
        repeatPassword: ''
      })
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
            value={oldPassword || ''}
            type='password'
            className='form__input'
            {...register('oldPassword')}
            placeholder='old password'
          />
        </label>
        <label className='form__label'>
          Password
          <input
            value={password || ''}
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
            value={repeatPassword || ''}
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