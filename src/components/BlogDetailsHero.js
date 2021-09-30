import React from 'react';
import styled from 'styled-components';

const BlogDetailsHeroStyles = styled.div`
  background-size: cover;
  padding: 24rem 0;
  position: relative;
  margin-bottom: 4rem;
  .hero {
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      font-size: 3.2rem;
      color: var(--white);
      max-width: 93rem;
      margin-bottom: 1.5rem;
    }

    &__data {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      p,
      span {
        color: var(--white);
      }

      p {
        font-size: 1rem;
        text-transform: uppercase;
      }

      span {
        font-size: 1.5rem;
      }
    }

    &__down {
      display: block;
      position: absolute;
      width: 100%;
      bottom: -2px;
      left: 0;
      height: 189px;
      background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1366 189" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(255, 255, 255, 1)" d="M 0 6 C 347.5 6 347.5 112 695 112 L 695 112 L 695 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(255, 255, 255, 1)" d="M 694 112 C 1030 112 1030 16 1366 16 L 1366 16 L 1366 0 L 694 0 Z" stroke-width="0"></path> </svg>');
      background-size: cover;
      background-repeat: no-repeat;
      transform: rotate(180deg) rotateY(180deg);
    }

    @media (max-width: 1365px) {
      &__down {
        background-size: contain;
      }
    }
  }
`;

function BlogDetailsHero({ img, title, tag, date }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${img})`,
  };

  return (
    <BlogDetailsHeroStyles style={backgroundStyle}>
      <section className="hero">
        <div className="container">
          <div className="hero__body">
            <h2 className="hero__title">{title}</h2>
            <div className="hero__data">
              <p className="hero__date">{date}</p>
              <span>|</span>
              <p className="hero__tag">{tag}</p>
            </div>
          </div>
        </div>

        <div className="hero__down" />
      </section>
    </BlogDetailsHeroStyles>
  );
}

export default BlogDetailsHero;
