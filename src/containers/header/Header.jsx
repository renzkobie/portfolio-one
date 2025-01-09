import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import Lottie from 'lottie-react';
import robot from '../../assets/robot.json';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Tech Revolution: The Future is Now</h1>
        <p>
          The application of scientific knowledge to the practical aims of human
          life or, as it is sometimes phrased, to the change and manipulation of
          the human environment.
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
