/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.scss';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          RenGlobals
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
              <a class='nav-link' href='#'>
                Hot Deals
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Elite Service Plans
              </a>
            </li>
            {/* housing */}
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Housing
              </a>
              <ul
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Video Series
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Canberries Series
                  </a>
                </li>
              </ul>
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
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Information
              </a>
              <ul
                class='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a class='dropdown-item' href='#'>
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Client Partnership Scheme
                  </a>
                </li>
              </ul>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
