import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const LoginStyles = styled.div`
  .form {
    width: 34.7rem;

    &__top {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-bottom: 5rem;
    }

    &__title {
      font-size: var(--big-font-size);
      background: var(--btn-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__subtitle {
      font-size: var(--normal-font-size);
    }

    &__middle {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      margin-bottom: 1.5rem;

      input {
        min-height: 6rem;
        padding: 0 2rem;
        flex: 1;
        outline: none;
        background: #ffffff;
        border: 1px solid #d1d1d1;
        border-radius: 5px;
        font-size: var(--small-font-size);
      }
    }

    &__forget {
      text-align: right;
      font-size: var(--smallest-font-size);
      color: #2f2f2f;
      margin-bottom: 4rem;
    }

    &__bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginStyles>
      <form action="" className="form">
        <div className="form__top">
          <h2 className="form__title">Welcome back!</h2>
          <p className="form__subtitle">
            Kindly fill in your login details to proceed
          </p>
        </div>
        <div className="form__middle">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password *"
          />
        </div>
        <p className="form__forget">forgot your password?</p>
        <div className="form__bottom">
          <Button btnText="login" />
          <p>
            Don’t have an account yet? Sign Up <a href="#">Sign Up</a>
          </p>
        </div>
      </form>
    </LoginStyles>
  );
}

export default Login;
