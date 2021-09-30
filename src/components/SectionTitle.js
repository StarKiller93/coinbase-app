import React from 'react';
import styled from 'styled-components';

const SectionTitleStyles = styled.div`
  .section-title {
    font-size: var(--bigger-font-size);
    font-weight: 700;
    margin-bottom: 5rem;
    background: var(--btn-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    text-align: ${(props) => (props.center ? 'center' : 'initial')};

    &::after {
      content: '';
      position: absolute;
      background: #fd749b;
      height: 6px;
      width: 5rem;
      left: ${(props) => (props.center ? '50%' : '0')};
      bottom: -1.6rem;
      transform: ${(props) => (props.center ? 'translateX(-50%)' : 'none')};
      border-radius: 100px;
    }
  }

  @media (max-width: 44em) {
    .section-title {
      margin-bottom: 3.5rem;
    }
  }
`;

export default function SectionTitle({
  heading = 'need heading',
  center = false,
}) {
  return (
    <SectionTitleStyles center={center}>
      <h1 className="section-title">{heading}</h1>
    </SectionTitleStyles>
  );
}
