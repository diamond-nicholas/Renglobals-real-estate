import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <section className='footer-wrapper'>
        <div className='footer-first'>
          <div className='footer-brand'>
            <h3>Renglo</h3>
          </div>
          <h3>About Renglo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
            molestiae magnam ab tempore ea vero autem animi voluptatem iure,
            officia itaque maiores eaque architecto cum quibusdam! Numquam,
            dolore nesciunt.
          </p>
        </div>

        <div className='footer-second'>
          <h2>Contact us</h2>
          <h3>
            for complaints and enquiries you can reach us on any of the numbers
            or visit our head office at:
          </h3>
        </div>

        <div className='footer-third'>
          <h3>Newsletter</h3>
          <form>
            <div className='footer-input'>
              <input type='email' />
              <button className='btn' type='submit'>
                Submit
              </button>
            </div>
          </form>
          <p>
            leave your email with us for information on our latest products and
            promo
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
