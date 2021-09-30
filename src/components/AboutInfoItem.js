import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import aboutQuality from '../assets/images/aboutQuality.svg';
import aboutMedal from '../assets/images/aboutMedal.svg';
import aboutCustomerReview from '../assets/images/aboutCustomerReview.svg';
import aboutSupport from '../assets/images/aboutSupport.svg';

const AboutInfoItemStyles = styled.div`
  .about__title {
    max-width: 51.2rem;
    margin: 0 auto;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 6.5rem;

    h2 {
      margin-bottom: 4rem;
      font-size: 1.8rem;
      font-weight: 700;
      background: var(--btn-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        background: #fd749b;
        height: 6px;
        width: 5rem;
        left: 50%;
        bottom: -1.6rem;
        transform: translateX(-50%);
        border-radius: 100px;
      }
    }

    p {
      font-size: 1.4rem;
    }
  }

  .about__box {
    padding: 5.5rem 0;
    width: 90%;
    border: 1px solid #fd749b;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    margin-bottom: 10rem;
  }

  .about__img {
    max-width: 52.7rem;
    margin-bottom: 4rem;
  }

  .about__text {
    text-align: center;
    font-size: 1.6rem;
    line-height: 4rem;
    max-width: 54.2rem;
    margin-bottom: 3.5rem;
  }

  .about__badge {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    img {
      display: block;
      max-width: 3rem;
    }
  }

  @media (max-width: 34em) {
    .about__box {
      padding: 3.5rem 2rem;
    }

    .about__text {
      line-height: 3rem;
      max-width: 100%;
      margin-bottom: 2rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .about__img {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export default function AboutInfoItem({
  aboutInfoImg,
  aboutInfoText,
  aboutInfoTitle = 'About CoinBase',
}) {
  return (
    <AboutInfoItemStyles>
      <div className="container">
        <div className="about__title">
          <h2>
            “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec
            semper leo ut lobortis condimentum. Orci varius natoque penatibus et
            magnis”
          </h2>
          <p>Ramon Ridwan • CEO CoinBase</p>
        </div>
        <div className="about__box">
          <img className="about__img" src={aboutInfoImg} alt="Hero img" />
          <SectionTitle heading={aboutInfoTitle} center />
          <p className="about__text">{aboutInfoText}</p>
          <div className="about__badge">
            <img src={aboutQuality} alt="aboutQuality" />
            <img src={aboutMedal} alt="aboutMedal" />
            <img src={aboutCustomerReview} alt="aboutCustomerReview" />
            <img src={aboutSupport} alt="aboutSupport" />
          </div>
        </div>
      </div>
    </AboutInfoItemStyles>
  );
}
