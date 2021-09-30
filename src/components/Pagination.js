import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &__link,
    &__next {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.6rem;
      border: 1px solid #e0e0e0;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: var(--btn-gradient);
        color: var(--white);
        border: none;
      }
    }

    &__link {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }

    &__next {
      width: 10rem;
      height: 6rem;
      border-radius: 100px;
    }
  }
`;

const Pagination = () => (
  <PaginationStyles>
    <div className="container">
      <ul className="pagination">
        <li className="pagination__link">01</li>
        <li className="pagination__link">02</li>
        <li className="pagination__link">03</li>
        <li className="pagination__link">...</li>
        <li className="pagination__next">Next</li>
      </ul>
    </div>
  </PaginationStyles>
);

export default Pagination;
