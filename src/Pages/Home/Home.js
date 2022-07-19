import React from 'react';
import FinestCards from '../../Components/Cards/FinestCards';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './Home.scss';

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
          <p>
            Begin your journey and become a property owner today{' '}
            <span>contact us</span>
          </p>
        </section>

        {/* finest properties */}
        <section className='finest-props'>
          <div className='header-finest'>
            <h3>Check our section of finest properties</h3>
            <p>with world class facilities and locations</p>
          </div>
          <div className='cards-wrapper'>
            <FinestCards />
            <FinestCards />
            <FinestCards />
          </div>
        </section>
        {/* join us */}
        <section className='join-us'>
          <h3>Join Us Today</h3>
          <button className='btn'>Contact us</button>
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
