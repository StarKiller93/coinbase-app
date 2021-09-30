import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import aboutImg from '../assets/images/aboutInfoImg.svg';

const AboutSectionStyles = styled.div`
  .about {
    overflow: hidden;
    margin-bottom: 10rem;

    .grid {
      align-items: center;
    }
    &__left {
      img {
        max-height: 39.3rem;
      }
    }

    &__text {
      line-height: 4rem;
      margin-bottom: 3.5rem;
    }

    &__right {
      max-width: 54.2rem;
      justify-self: end;
    }
  }

  @media (max-width: 44em) {
    .about {
      .grid {
        grid-template-columns: 1fr;
        row-gap: 3rem;
        padding: 0 3rem;
      }

      &__left {
        img {
          max-height: 100%;
        }
      }

      &__right {
        max-width: 100%;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <section className="about">
        <div className="container grid grid--2-cols">
          <div className="about__left">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="about__right">
            <SectionTitle heading="Welcome to CoinBase" />
            <p className="about__text">
              <PText>
                We have the best rates . Simply start your exchange right now.
                Sign up for our Affiliate program and earn commission from each
                exchange. The earnings are credited in your account instantly
                and can be withdrawn right away. Also note some exchange
                directions are hidden for unregistered user. To ensure to have
                access to all our exchange directions and benefits kindly sign
                up and verify your identity. Discover
              </PText>
            </p>
            <Button btnLink="/about" btnText="Discover" />
          </div>
        </div>
      </section>
    </AboutSectionStyles>
  );
}
