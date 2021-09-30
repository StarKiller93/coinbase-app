import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const CardStyles = styled.div`
  margin-bottom: 5rem;
  .card {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 6rem;
    display: grid;
    border-radius: 30px;
    overflow: hidden;

    &__img {
      img {
        object-fit: cover;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 6.5rem 0 4rem;
      border: 1px solid #fd749b;
      border-top: none;
      border-radius: 0 0 30px 30px;
      margin-top: -5px;
    }

    &__title {
      font-size: 3.2rem;
      margin-bottom: 1.5rem;
      background: var(--btn-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      max-width: 93rem;
    }

    &__text {
      font-size: 1.6rem;
      line-height: 2.8rem;
      max-width: 87rem;
      margin-bottom: 3.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    &__data {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;

      span {
        font-size: 1.5rem;
        font-family: 'Poppins Light', sans-serif;
      }
    }

    &__date {
      font-size: 1rem;
    }

    &__tag {
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  // (Tablets) Below 920 / 16px
  @media (max-width: 57em) {
    .card {
      &__body {
        padding: 4rem 2rem 4rem;
      }

      &__title {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
      }

      &__data {
        margin-bottom: 2rem;
      }
    }
  }

  // (Phones) Below 544px / 16px
  @media (max-width: 34em) {
    .card {
      &__body {
        padding: 2rem;
      }

      &__title {
        font-size: 2rem;
      }

      &__text {
        font-size: 1.4rem;
        line-height: 2.2rem;
        max-width: 100%;
        margin-bottom: 3rem;
      }

      &__data {
        margin-bottom: 1rem;
      }
    }
  }
`;

const Card = ({ id, tag, date, img, title, text }) => (
  <CardStyles>
    <div className="container">
      <div className="card">
        <Link to={`/blogs/${title}`}>
          <div className="card__img">
            <img src={img} alt="" />
          </div>
        </Link>
        <div className="card__body">
          <Link to={`/blogs/${title}`}>
            <h3 className="card__title">{title}</h3>
          </Link>
          <div className="card__data">
            <div className="card__date">{date}</div>
            <span>|</span>
            <div className="card__tag">{tag}</div>
          </div>
          <p className="card__text">{text}</p>
          <Button btnText="Discover" btnLink={`/blogs/${title}`} />
        </div>
      </div>
    </div>
  </CardStyles>
);

export default Card;
