import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';
import Logo from '../assets/images/logo.svg';
import Button from './Button';
import Login from './Login';
import Modal from './Modal';

const NavMenuStyles = styled.div`
  .active-modal {
    overflow-y: hidden;
  }

  .header {
    width: 100%;
    padding: 3.7rem 0;

    .container {
      max-width: 130rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__nav {
      display: flex;
      align-items: center;
      gap: 5.5rem;
      position: relative;

      color: var(--text-color);
    }

    &__nav-list {
      display: flex;
      align-items: center;
      gap: 4.8rem;
    }

    &__nav-link {
      font-family: 'Poppins Bold';
      font-size: 1.4rem;
      font-weight: 700;
      color: #313131;
    }

    &__dropdown {
      color: var(--text-color);
      font-family: 'Poppins Bold';
      font-weight: 700;
      font-size: 1.4rem;
    }

    &__icon {
      color: var(--primary-color);
      font-size: 2rem;
      cursor: pointer;
    }

    .active {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        background: #fd749b;
        height: 3px;
        width: 22px;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        border-radius: 10px;
      }
    }
  }

  // MOBILE
  .mobile-menu-icon {
    width: 4rem;
    display: none;
    outline: none;
    cursor: pointer;
  }

  .mobile-close-icon {
    position: absolute;
    display: none;
    top: 3rem;
    right: 3rem;
    align-self: right;
    width: 4rem;
    outline: none;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }

  // Sticky Navigation
  .sticky {
    max-height: 9.6rem;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: 0px 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  }

  // (Tablets) Below 920 / 16px
  @media (max-width: 57em) {
    .header {
      padding: 3rem 0;

      .container {
        max-width: 110rem;
      }

      &__nav {
        /* display: none; */
        background-color: var(--white);
        padding: 10rem 10rem;
        height: 100vh;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 100;
        transition: 0.3s ease transform;
        box-shadow: 4px 13px 65px rgba(154, 154, 154, 0.1);
        font-size: var(--normal-font-size);
      }

      &__nav-list {
        display: flex;
        flex-direction: column;
        margin-top: -5rem;
      }
    }

    .mobile-menu-icon {
      display: block;
    }
    .mobile-close-icon {
      display: block;
    }

    .hide-item {
      transform: translateX(100%);
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <NavMenuStyles>
      <header className="header">
        <div className="container">
          <Link to="/">
            <img src={Logo} alt="Logo" className="header__logo" />
          </Link>
          <nav className={!showNav ? 'header__nav hide-item' : 'header__nav'}>
            <div
              className="mobile-close-icon"
              onClick={() => setShowNav(!showNav)}
              onKeyUp={() => setShowNav(!showNav)}
              role="button"
              tabIndex="0"
            >
              <MdClose />
            </div>
            <ul className="header__nav-list">
              <li>
                <NavLink
                  to="/"
                  exact
                  className="header__nav-link"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowNav(!showNav)}
                  onKeyUp={() => setShowNav(!showNav)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  exact
                  className="header__nav-link"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowNav(!showNav)}
                  onKeyUp={() => setShowNav(!showNav)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  exact
                  className="header__nav-link"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowNav(!showNav)}
                  onKeyUp={() => setShowNav(!showNav)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  exact
                  className="header__nav-link"
                  role="button"
                  tabIndex={0}
                  onClick={() => setShowNav(!showNav)}
                  onKeyUp={() => setShowNav(!showNav)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <Link to="/" className="header__dropdown">
              Sell Bitcoin/ Giftcard
            </Link>
            <Button btnText="Login" long onClick={showModal} />
          </nav>

          <div
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            onKeyUp={() => setShowNav(!showNav)}
            role="button"
            tabIndex="0"
          >
            <MdMenu />
          </div>
        </div>
      </header>
      {openModal && (
        <Modal closeModal={showModal}>
          <Login />
        </Modal>
      )}
    </NavMenuStyles>
  );
}
