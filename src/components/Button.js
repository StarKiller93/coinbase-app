import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  .btn {
    border-radius: 100px;
    font-size: var(--small-font-size);
    line-height: 1;
    background: var(--btn-gradient);
    text-transform: uppercase;
    transition: $transition;
    display: inline-block;
    padding: ${(props) => (props.long ? '2rem 5.6rem' : '1.7rem 3.2rem')};
    cursor: pointer;
    span {
      font-family: 'Poppins Bold';
      color: var(--white);
    }
  }

  .btn--white {
    background: var(--white);
    transition: $transition;
    span {
      background: var(--btn-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:hover {
      background: var(--btn-gradient);
      span {
        background: var(--white);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export default function Button({
  btnText = 'test',
  btnLink,
  outline = false,
  btnWhite = false,
  long = false,
  onClick,
}) {
  return (
    <ButtonStyle outline={outline} long={long}>
      <Link
        onClick={onClick}
        className={`btn ${btnWhite ? 'btn--white' : ''}`}
        to={btnLink}
      >
        <span>{btnText}</span>
      </Link>
    </ButtonStyle>
  );
}
