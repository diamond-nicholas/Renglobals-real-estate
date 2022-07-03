import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
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
      </main>
    </div>
  );
};

export default Home;
