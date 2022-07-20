import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <section className='footer-wrapper'>
        <div className='footer-first'>
          <div className='footer-brand'>
            <img src='R.LOGO 2.png' alt='' />
          </div>
          <h5>About Renglo</h5>
          <p>
            We are constantly driven to keep our promises of affordable housing
            products with a singular mission to exceed expectations
          </p>
        </div>

        <div className='footer-second'>
          <h3>Contact us</h3>
          <p>
            For complaints and enquiries you can reach us on any of the numbers
            or visit our head office at:
          </p>
          <p>
            <i class='far fa-phone-alt'></i> +2349167194822, +2348145220426
          </p>
          <p>
            <i class='far fa-envelope'></i> info@renglobals.com
          </p>
        </div>

        <div className='footer-third'>
          <h3>Newsletter</h3>
          <form>
            <div className='footer-input'>
              <input type='email' placeholder='Enter your email' />
              <button className='btn' type='submit'>
                Submit
              </button>
            </div>
          </form>
          <p>
            Leave your email with us for information on our latest products and
            promo
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
