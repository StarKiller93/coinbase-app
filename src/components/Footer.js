import React from 'react';
import styled from 'styled-components';
import FooterLogo from '../assets/images/footer-logo.svg';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  .footer {
    background-color: var(--footer-bg);

    .container {
      max-width: 130rem;
    }

    .grid {
      grid-template-columns: 2fr 1fr 1fr 2fr;
      padding: 7rem 0;
      column-gap: 3rem;
      align-items: start;
      display: grid;
    }

    &__social {
      max-width: 34rem;
    }

    &__logo {
      margin-bottom: 3.5rem;
      width: 11.2rem;
      height: 2.3rem;
    }

    &__text {
      font-size: var(--small-font-size);
      color: #a2a2a2;
      line-height: 2.4rem;
      margin-bottom: 2rem;
    }

    &__title {
      font-size: var(--smaller-font-size);
      color: var(--white);
      margin-bottom: 3.5rem;
    }

    &__insta {
      max-width: 31rem;
      justify-self: end;
    }

    &__img-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      img {
        max-width: 7rem;
        max-height: 7rem;
      }
    }
  }

  // (Smaller Tablets) Below 704px / 16px
  @media (max-width: 44em) {
    .footer {
      .grid {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: min-content min-content;
        padding: 4rem 0;
        column-gap: 2rem;
      }

      &__social {
        grid-column: 1/-1;
        min-width: 60%;
      }

      &__text {
        margin-bottom: 4rem;
      }

      &__img-list {
        img {
          max-width: 6rem;
          max-height: 6rem;
        }
      }
    }
  }

  // (Phones) Below 544px / 16px
  @media (max-width: 34em) {
    .footer {
      .grid {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <footer className="footer">
        <div className="container">
          <div className="grid">
            <div className="footer__social">
              <img
                src={FooterLogo}
                alt="footer-logo"
                className="footer__logo"
              />
              <p className="footer__text">
                Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
                rhoncus augue. Fusce vel metus pharetra, fermentum
              </p>
            </div>

            <div className="footer__links">
              <FooterCol
                heading="Importan Links"
                links={[
                  {
                    title: 'Home',
                    path: '/',
                    type: 'Link',
                  },
                  {
                    title: 'About Us',
                    path: '/about',
                    type: 'Link',
                  },
                  {
                    title: 'Blog',
                    path: '/blog',
                    type: 'Link',
                  },
                  {
                    title: 'Contact Us',
                    path: '/contact',
                    type: 'Link',
                  },
                ]}
              />
            </div>

            <div className="footer__contact">
              <FooterCol
                heading="Contact Us"
                links={[
                  {
                    title: '+234137632128',
                    path: 'tel:+234137632128',
                  },
                  {
                    title: 'Coinbase@yahoo.com',
                    path: 'Coinbase@yahoo.com',
                  },
                  {
                    title: 'GEC Circle, Chittagong, Bangladesh',
                    path: 'http://google.com/maps',
                  },
                  {
                    title: 'Download Our App',
                    path: 'http://google.com/',
                  },
                ]}
              />
            </div>

            <div className="footer__insta">
              <p className="footer__title">CoinBase Instagram</p>
              <div className="footer__img-list">
                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />

                <img src="https://via.placeholder.com/70" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyles>
  );
}
