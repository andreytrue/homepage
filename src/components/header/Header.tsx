import React, { FC } from 'react';

import { HeaderLinks } from '../../common/common';

const Header: FC = () => {
  const links = Object.entries(HeaderLinks);

  return (
    <header className='app__header header'>
      <ul className='header__list'>
        {links.map((link) => (
          <li className='header__item'>
            <a className='header__link' href={link[1]}>{link[0]}</a>
          </li>
        ))}
      </ul>
    </header>
  )
};

export default Header;
