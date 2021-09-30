import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import experienceImg from '../assets/images/experience.svg';

const AboutSectionStyles = styled.div`
  .experience {
    position: relative;
    // background-color: var(--white);
    margin-bottom: 10rem;
    overflow: hidden;

    .grid {
      align-items: center;
    }

    &__left {
      max-width: 54.2rem;
      justify-self: start;
    }

    &__title {
      max-width: 25.4rem;
    }

    &__text {
      line-height: 4rem;
      margin-bottom: 3.5rem;
    }

    &__right {
      justify-self: end;
    }
  }

  @media (max-width: 44em) {
    .experience {
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
        grid-row: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 90%;
        }
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <section className="experience">
        <div className="container grid grid--2-cols">
          <div className="experience__left">
            <div className="experience__title">
              <SectionTitle
                heading="Great experience 
with CoinBase"
              />
            </div>
            <p className="experience__text">
              <PText>
                CoinBase is an online site and a p2admin platform that allows
                users to buy, sell and/ or exchange digital and fiat assets
                safely. Owned and managed by CoinBase Business Services
                established and Incoperated in Nigeria.
              </PText>
            </p>
            <Button btnLink="/about" btnText="Discover" />
          </div>
          <div className="experience__right">
            <img src={experienceImg} alt="exchange" />
          </div>
        </div>
      </section>
    </AboutSectionStyles>
  );
}
