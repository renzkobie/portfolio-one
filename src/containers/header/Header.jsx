import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import Lottie from 'lottie-react';
import robot from '../../assets/developerrr.json';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          I'm Renz Kobie.
          <br /> A College Student.
        </h1>
        <p>
          Hello! I'm Renz, an aspiring web developer with a passion for creating
          dynamic and responsive web applications. With a foundation in both
          front-end and back-end development, I am dedicated to continuously
          learning and expanding my skill set to stay updated with the latest
          trends and technologies in the web development world.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <Lottie className='robot-anime' loop={true} animationData={robot} />
      </div>
    </div>
  );
};

export default Header;
