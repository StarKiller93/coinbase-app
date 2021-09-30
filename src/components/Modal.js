import React from 'react';
import styled from 'styled-components';

const ModalStyles = styled.div`
  body.active-modal {
    overflow-y: hidden;
  }
  .modalBG {
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: 0.5;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1000;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 15rem;
    max-width: 90%;
    background: var(--white);
    border-radius: 30px;
    position: relative;
    z-index: 2000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      color: #000;
    }
  }

  .modalBtn {
    position: absolute;
    right: 30px;
    top: 20px;
    cursor: pointer;
    z-index: 3000;
    font-size: 2rem;
    font-family: 'Poppins Bold', sans-serif;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

function Modal({ children, closeModal }) {
  return (
    <ModalStyles>
      <div
        className="modalBG"
        onClick={closeModal}
        onKeyUp={closeModal}
        role="button"
        tabIndex="0"
      >
        {' '}
      </div>
      <div className="modal">
        {children}
        <div
          className="modalBtn"
          onClick={closeModal}
          onKeyUp={closeModal}
          role="button"
          tabIndex="0"
        >
          X
        </div>
      </div>
    </ModalStyles>
  );
}

export default Modal;
