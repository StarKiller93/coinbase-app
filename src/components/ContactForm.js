import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.div`
  .subheading {
    text-align: center;
    font-size: 1.7rem;
    margin-bottom: 5rem;
  }

  .error {
    text-align: center;
    font-size: 1.7rem;
    color: red;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3.2fr 1fr;
    gap: 3rem;
    max-width: 100%;
  }

  input {
    height: 6rem;
    padding: 0 2rem 0 2rem;
  }

  input,
  textarea {
    background: #ffffff;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    outline: none;

    &::placeholder {
      color: #2f2f2f;
      font-size: var(--small-font-size);
    }
  }
  textarea {
    padding: 2rem 2rem;
    resize: none;
  }

  button[type='submit'] {
    grid-column: 1/2;
    justify-self: start;
    align-self: start;
    border-radius: 100px;
    border: none;
    font-size: var(--small-font-size);
    line-height: 1;
    background: var(--btn-gradient);
    text-transform: uppercase;
    transition: $transition;
    display: inline-block;
    padding: 2rem 5.6rem;
    cursor: pointer;
    font-family: 'Poppins Bold';
    color: var(--white);

    &:disabled {
      opacity: 0.5;
    }
  }

  .form {
    max-width: 73.2rem;
    margin: 0 auto;
    margin-bottom: 9rem;

    &__input {
      height: 6rem;
      input {
        height: 100%;
        width: 100%;
      }
    }

    &__input:nth-child(1) {
      grid-column: 1/2;
    }
    &__input:nth-child(2) {
      grid-column: 2/3;
    }

    &__textarea {
      grid-column: 1/-1;

      textarea {
        height: 100%;
        width: 100%;
      }
    }
  }

  // (Smaller Tablets) Below 704px / 16px
  @media (max-width: 28em) {
    .grid {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function ContactForm({ subheading = true }) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [enteredNameEmpty, setEnteredNameEmpty] = useState(false);
  const [enteredEmailEmpty, setEnteredEmailEmpty] = useState(false);
  const [enteredMessageEmpty, setEnteredMessageEmpty] = useState(false);
  const [enteredNameError, setEnteredNameError] = useState(
    'Name cant be empty'
  );
  const [enteredEmailError, setEnteredEmailError] = useState(
    'Email cant be empty'
  );
  const [enteredMessageError, setEnteredMessageError] = useState(
    'Textarea cant be empty'
  );

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (enteredNameError || enteredEmailError || enteredMessageError) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [enteredNameError, enteredEmailError, enteredMessageError]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (!event.target.value) {
      setEnteredNameError('Name cant be empty');
    } else {
      setEnteredNameError('');
    }
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEnteredEmailError('Email is incorrect!');
      if (!event.target.value) {
        setEnteredEmailError('Email is empty!');
      }
    } else {
      setEnteredEmailError('');
    }
  };
  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
    if (!event.target.value) {
      setEnteredMessageError('Textarea cant be empty');
    } else {
      setEnteredMessageError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setEnteredNameEmpty(true);
        break;
      case 'email':
        setEnteredEmailEmpty(true);
        break;
      case 'message':
        setEnteredMessageEmpty(true);
        break;
      default:
        setEnteredMessageEmpty(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredMessage);

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
  };

  return (
    <ContactFormStyles>
      <div className="container">
        {subheading && (
          <p className="subheading">
            Please note that all message will be replied within the next 12hours
          </p>
        )}
        {enteredNameEmpty && enteredNameError && (
          <p className="error">{enteredNameError}</p>
        )}
        {enteredEmailEmpty && enteredEmailError && (
          <p className="error">{enteredEmailError}</p>
        )}
        {enteredMessageEmpty && enteredMessageError && (
          <p className="error">{enteredMessageError}</p>
        )}

        <form action="/" className="form grid" onSubmit={formSubmitHandler}>
          <div className="form__input">
            <input
              type="text"
              id="name"
              name="name"
              value={enteredName}
              onChange={nameInputChangeHandler}
              onBlur={(e) => blurHandler(e)}
              placeholder="Name *"
            />
          </div>

          <div className="form__input">
            <input
              type="email"
              id="email"
              name="email"
              value={enteredEmail}
              onChange={emailInputChangeHandler}
              onBlur={(e) => blurHandler(e)}
              placeholder="Email *"
            />
          </div>

          <div className="form__textarea">
            <textarea
              type="text"
              id="message"
              name="message"
              value={enteredMessage}
              onChange={messageInputChangeHandler}
              onBlur={(e) => blurHandler(e)}
              placeholder="Your Comment"
            />
          </div>

          <button disabled={!formIsValid} type="submit">
            Send
          </button>
        </form>
      </div>
    </ContactFormStyles>
  );
}
