import React from 'react';

import { FooterLinks } from '../../common/common';

const Links = () => {
  const links = Object.entries(FooterLinks);

  return (
    <section className='main__links links'>
      <h2 className='links__header'>Reach out to me online:</h2>

      <ul className='links__list'>
        {links.map((link) => (
          <li className='links__item'>
            <a className='links__title' href={link[1]}>{link[0]}</a>
          </li>
        ))}
      </ul>
    </section>
  )
};

export default Links;
