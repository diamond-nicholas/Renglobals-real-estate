import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './Home.scss';
import { Link } from 'react-router-dom';
import EstatesCards from '../../Components/Cards/EstatesCards';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className='banner'>
          <h1>RenGlobal Properties</h1>
          <h3>
            The largest real estate company for home owners, buyers and partners
          </h3>
          <h4>Making the incredible affordable</h4>
          <div className='wrapper'>
            <p>
              Begin your journey and become a property owner today{' '}
              <span>
                <button className='btn'>
                  <Link className=' con' to='/contact'>
                    Contact us
                  </Link>
                </button>
              </span>
            </p>
          </div>
        </section>

        {/* finest properties */}
        <section className='finest-props'>
          <div className='header-finest'>
            <h3>Check our section of finest properties</h3>
            <p>with world class facilities and locations</p>
          </div>
          <div className='cards-wrapper'>
            <div className='card1'>
              <EstatesCards />
            </div>
            <div className='card2'>
              <EstatesCards />
            </div>
            <div className='card3'>
              <EstatesCards />
            </div>
          </div>

          <div className='btn_wrapper'>
            <button className='btn'>Load More</button>
          </div>
        </section>
        {/* join us */}
        <section className='join-us'>
          <h3>Join Us Today</h3>
          <button className='btn'>
            <Link className=' con' to='/contact'>
              Contact us
            </Link>
          </button>
          <p>Begin your journey to becoming a property owner today</p>
          <hr />
        </section>
      </main>
      <Footer />
      <Socials />
    </div>
  );
};

export default Home;
