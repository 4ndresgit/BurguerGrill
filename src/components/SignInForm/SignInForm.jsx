/* voy a poner formulario de inicio de session con email, contraseña y boton de inicio de session*/
import {useState} from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './SignInForm.scss'



const SignInForm = () => {

  const {login} = useContext(AuthContext)

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

 const handleImputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
 }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
  }

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <input 
        onChange={handleImputChange}
        value={values.email} 
        type='email'
        placeholder='Email'
        className='form-control my-2'
        name='email' />
        <input
        onChange={handleImputChange}
        value={values.password}
        type='password' 
        placeholder='Contraseña' 
        className='form-control my-2'
        name='password' />
        <button className='btn btn-warning' type='submit'>Iniciar sessión</button>
      </form>
    </div>
  );
};

export default SignInForm;
 