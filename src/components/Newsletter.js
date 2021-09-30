import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';

const NewsletterStyles = styled.div`
  .subscribe {
    margin-bottom: 10rem;
    .section-title {
      margin-bottom: 6rem;
    }

    &__subheading {
      text-align: center;
      max-width: 37.8rem;
      margin-bottom: 7rem;
      margin: 0 auto;
    }

    &__form {
      display: flex;
      gap: 0.9rem;
      align-items: center;
      justify-content: center;
      margin-top: 7rem;

      input {
        padding: 1.7rem 2.7rem;
        height: 4.8rem;
        max-width: 38.8rem;
        flex: 1;
        border: 1px solid #fd749b;
        border-radius: 100px;
        outline: none;

        &::placeholder {
          font-size: var(--smallest-font-size);
        }
      }
    }
  }

  // (Phones) Below 544px / 16px
  @media (max-width: 34em) {
    .subscribe {
      padding: 0 3rem;
      &__form {
      gap: 0.5rem;
      margin-top: 4rem;

      input {
        max-width: 80%;
      }
    }
  }
`;

function Newsletter() {
  return (
    <NewsletterStyles>
      <section className="subscribe">
        <div className="container">
          <SectionTitle heading="Subscribe our newsletter" center />
          <div className="subscribe__subheading">
            <PText>
              Subscribe to our newsletter for daily/weekly update of our
              products and services.
            </PText>
          </div>
        </div>

        <div className="container">
          <form action="/" className="subscribe__form">
            <input type="text" required placeholder="Email" />
            <Button btnLink="/" btnText="Send" />
          </form>
        </div>
      </section>
    </NewsletterStyles>
  );
}

export default Newsletter;
