import styled from 'styled-components';
import Button from './Button';

const HeroStyles = styled.div`
  .hero {
    background: var(--hero-gradient);
    padding: 6rem 0 19rem;
    position: relative;
    margin-bottom: 3rem;

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .heading-primary {
      font-size: var(--biggest-font-size);
      color: var(--white);
      font-family: ${(props) =>
        props.light
          ? '"Poppins Light", sans-serif'
          : '"Poppins Bold", sans-serif'};
      margin-bottom: 2rem;

      span {
        font-family: 'Poppins Bold', sans-serif;
        color: var(--white);
      }
    }

    &__left {
      max-width: 52rem;
    }

    &__text {
      color: var(--white);
      line-height: 2.7rem;
      margin-bottom: 3rem;
      font-size: var(--smaller-font-size);
    }
  }

  @media (max-width: 57em) {
    .hero {
      padding: 6rem 0 16rem;

      .grid {
        column-gap: 2.5rem;
      }

      .heading-primary {
        font-size: 3rem;
      }
    }
  }

  // (Smaller Tablets) Below 704px / 16px
  @media (max-width: 44em) {
    .hero {
      padding: 6rem 0 9rem;

      .container {
      }
    }
  }

  // (Phones) Below 544px / 16px
  @media (max-width: 34em) {
    .hero {
      padding: 4rem 0 3rem;
      .grid {
        grid-template-columns: 1fr;
        row-gap: 3rem;
        padding: 0 3rem;
      }
    }
  }

  .hero__down {
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

  @media (max-width: 85.3em) {
    .hero__down {
      background-size: contain;
    }
  }
`;

function HeroSection({
  heroImg,
  heroTitle,
  heroTitleSpan,
  heroText,
  light = false,
  heroBtn = false,
}) {
  return (
    <HeroStyles light={light}>
      <section className="hero">
        <div className="container grid">
          <div className="hero__left">
            <h1 className="heading-primary">
              {heroTitle} <span>{heroTitleSpan}</span>
            </h1>
            <p className="hero__text">{heroText}</p>
            {heroBtn ? (
              <Button btnText="Get started" btnLink="/" btnWhite />
            ) : (
              ''
            )}
          </div>
          <div className="hero__right">
            <img src={heroImg} alt="Hero img" />
          </div>
        </div>

        <div className="hero__down" />
      </section>
    </HeroStyles>
  );
}

export default HeroSection;
