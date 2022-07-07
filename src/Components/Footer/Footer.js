import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <section className='footer-wrapper'>
        <div className='footer-first'>
          <div className='footer-brand'>
            <h3>Renglobals</h3>
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
            <i class='far fa-phone-alt'></i> +2348064084005
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
