import { useState } from 'react';
import styled from 'styled-components';
import faqData from '../assets/data/faq';
import SectionTitle from './SectionTitle';

const FaqStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .faq {
    max-width: 70rem;
    margin: 0 auto;
    margin-bottom: 10rem;

    &__item {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      box-shadow: 4px 13px 65px rgba(154, 154, 154, 0.1);
      border-radius: 15px;
      margin-bottom: 1rem;
      padding: 1rem 2rem;
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      span {
        font-size: 1.6rem;
      }
    }

    &__answer {
      font-size: 1.1rem;
      line-height: 1.7rem;
      overflow: hidden;
      max-height: 0;
      transition: all 0.5s cubic-bezier(0, 1, 0, 1);
    }

    &__answer.show {
      height: auto;
      max-height: 1000rem;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
    }
  }

  @media (max-width: 34em) {
    .faq {
      padding: 0 3rem;
    }
  }
`;

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <FaqStyles>
      <SectionTitle heading="Frequently Asked Questions" center />
      <div className="container">
        <div className="faq">
          {faqData.map((item, i) => (
            <div className="faq__item">
              <div
                className="faq__title"
                onClick={() => toggleFAQ(i)}
                onKeyUp={() => toggleFAQ(i)}
                role="button"
                tabIndex="0"
              >
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div
                className={selected === i ? 'faq__answer show' : 'faq__answer'}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FaqStyles>
  );
}

export default Faq;
