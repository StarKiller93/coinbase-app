import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 4rem;
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
