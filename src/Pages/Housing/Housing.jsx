import React from 'react';
import HomeList from '../../Components/Cards/HomeList';
import Navbar from '../../Components/Navbar/Navbar';
import Socials from '../../Components/Socials/Socials';
import './Housing.scss';

const Housing = () => {
  return (
    <div>
      <Navbar />
      <div className='housing_main mb-5'>
        <section className='housing_body'>
          <header>
            <h3>Housing Series</h3>
          </header>
          <section className='housing_content'>
            <div className='housing_wrapper'>
              <HomeList />
              <HomeList />
              <HomeList />
            </div>
          </section>
        </section>
      </div>
      <Socials />
    </div>
  );
};

export default Housing;
