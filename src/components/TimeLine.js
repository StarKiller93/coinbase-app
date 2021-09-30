import React from 'react';
import styled from 'styled-components';
import timelineData from '../assets/data/timeline';
import SectionTitle from './SectionTitle';
import TimeLineItem from './TimeLineItem';

const TimeLineStyles = styled.div`
  margin-bottom: 15rem;

  @media (max-width: 34em) {
    padding: 0 3rem;
    margin-bottom: 10rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: relative;

    &::after {
      background: var(--btn-gradient);
      content: '';
      width: 5px;
      position: absolute;
      left: calc(50% - 2.5px);
      height: 100%;
    }

    &__end {
      text-align: center;
      margin-top: 3rem;
      font-family: 'Poppins Bold', sans-serif;
      font-size: var(--smallest-font-size);
      text-transform: uppercase;
    }
  }

  @media (max-width: 34em) {
    .timeline {
      padding: 0 3rem;
      &::after {
        left: 4rem;
      }

      &__end {
        text-align: left;
      }
    }
  }
`;

const TimeLine = () =>
  timelineData.length > 0 && (
    <TimeLineStyles>
      <SectionTitle heading="Our History" center />
      <div className="container">
        <div className="timeline">
          {timelineData.map((data, id) => (
            <TimeLineItem data={data} key={id} />
          ))}
        </div>
        <p className="timeline__end">To be continue…</p>
      </div>
    </TimeLineStyles>
  );

export default TimeLine;
