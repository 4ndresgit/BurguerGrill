/* voy a poner formulario de inicio de session con email, contraseña y boton de inicio de session*/
import './SignInForm.scss'
import React from 'react';

const SignInForm = () => {
  return (
    <div>
      <main className='login-form'>
        <input type='text' placeholder='Correo electrónico' />
        <input type='password' placeholder='Contraseña' />
      </main>
    </div>
  );
};

export default SignInForm;
