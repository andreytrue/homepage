import React, { FC } from 'react';

const About: FC = () => {
  return (
    <section className='main__about about'>
      <h1 className='about__header'>Hello &#128075;</h1>

      <p className='about__text'>I’m Andrey Demyanov — frontend developer with passion to React, UI and web design. 
      I like to create interfaces with modern stack without forgetting about performance and swiftness.</p>
      <p className='about__text'>Out of laptop I like to birdwatching, travelling and play Catan.</p>
      <p className='about__text'>If you want to contact me — write me on email or at the telegram :)</p>
    </section>
  )
};

export default About;
