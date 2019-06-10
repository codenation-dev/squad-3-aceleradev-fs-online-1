import React from 'react';

import Input from 'components/Input';

import './index.css';
import bankImage from './bank.jpg';

const Login = () => (
  <main className="login">
    <aside>
      <img src={bankImage} alt="An american bank in black and white" />
      <p>
        Photo by
        {' '}
        <a href="https://unsplash.com/@etiennemartin" target="_blank" rel="noopener noreferrer">
          Etienne Martin
        </a>
        {' '}
        on
        {' '}
        <a href="https://unsplash.com/photos/2_K82gx9Uk8" target="_blank" rel="noopener noreferrer">
          Unsplash
        </a>
      </p>
    </aside>
    <article>
      <h3>LOGIN</h3>
      <form action="">
        <Input type="text" placeholder="alberto@uati.bank" />
        <Input type="password" placeholder="******" />
      </form>
    </article>
  </main>
);

export default Login;
