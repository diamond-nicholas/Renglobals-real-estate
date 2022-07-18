import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './About.scss';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about_main'>
        <section className='about_body'>
          <h3>About RenGlobals...</h3>
          <section className='statements'>
            <article className='our_mission'>
              <aside>
                <i class='far fa-users'></i>
                <div className='mission_content'>
                  <h5>Our Mission</h5>
                  <p>
                    At renaissance global we aim to become a universal brand
                    with happy customers who can attest to the quality of our
                    products and services .putting a smile on the faces of every
                    individual doing business with us
                  </p>
                </div>
              </aside>
            </article>
            <article className='our_vision'>
              <aside>
                <i class='fal fa-analytics'></i>
                <div className='vision_content'>
                  <h5>Our Vision</h5>
                  <p>
                    At renaissance global we aim to become a universal brand
                    with happy customers who can attest to the quality of our
                    products and services .putting a smile on the faces of every
                    individual doing business with us
                  </p>
                </div>
              </aside>
            </article>
            <article className='our_role'>
              <aside>
                <i class='fal fa-analytics'></i>
                <div className='role_content'>
                  <h5>Our Role</h5>
                  <p>
                    At renaissance global we aim to become a universal brand
                    with happy customers who can attest to the quality of our
                    products and services .putting a smile on the faces of every
                    individual doing business with us
                  </p>
                </div>
              </aside>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
