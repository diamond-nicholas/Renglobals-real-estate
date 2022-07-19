/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          <Link className='nav-link' to='/'>
            RG
          </Link>
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <Link className='nav-link' to='/hotdeals'>
                Hot Deals
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link' to='/elite'>
                Elite Service Plans
              </Link>
            </li>
            {/* housing */}
            <li class='nav-item dropdown'>
              <Link className='nav-link' to='/housing'>
                Housing
              </Link>
            </li>
            {/* estate */}

            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Estate
              </a>
              <ul
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Eko City
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Estate in Abuja
                  </a>
                </li>
              </ul>
            </li>
            {/* information */}
            <li class='nav-item dropdown'>
              <Link className='nav-link' to='/t&c'>
                Terms&Conditions
              </Link>
            </li>

            <li class='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li class='nav-item'>
              <Link className='nav-link' to='/about'>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
