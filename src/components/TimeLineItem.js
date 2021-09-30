import React from 'react';
import styled from 'styled-components';

const TimeLineItemStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 47%;
  text-align: right;

  @media (max-width: 34em) {
    width: 90%;
    justify-content: flex-end;
    text-align: left;
  }

  &:nth-child(odd) {
    align-self: flex-start;
    justify-content: flex-end;
    text-align: right;
  }
  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    text-align: left;
  }

  &:first-child {
    padding-top: 2rem;
  }

  &:last-child {
    padding-bottom: 2rem;
  }

  .timeline__item-content {
    max-width: 41.8rem;
    /* text-align: left; */
  }

  .timeline__date {
    font-size: var(--big-font-size);
    font-family: 'Poppins Bold', sans-serif;
    font-weight: 700;
    background: var(--btn-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .timeline__text {
    font-size: var(--small-font-size);
    line-height: 3rem;
  }

  @media (max-width: 34em) {
    &:nth-child(even) {
      align-self: flex-end;
      text-align: left;
    }

    &:nth-child(odd) {
      align-self: flex-end;
      text-align: left;
    }

    .timeline__item-content {
      max-width: 100%;
      /* text-align: left; */
    }
  }
`;

export default function TimeLineItem({ data }) {
  return (
    <TimeLineItemStyles>
      <div className="timeline__item-content">
        <time className="timeline__date">{data.date}</time>
        <p className="timeline__text">{data.text}</p>
        <span className="timeline__circle" />
      </div>
    </TimeLineItemStyles>
  );
}
