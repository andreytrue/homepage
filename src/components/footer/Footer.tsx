import React, { FC } from 'react';

import { SOURCE_CODE } from '../../common/common';

const Footer: FC = () => {

  return (
    <footer className='app__footer footer'>
      <p className='footer__text'>2022. This site was build with React. <a className='footer__link' href={SOURCE_CODE}>Source Code</a>.</p>
    </footer>
  )
};

export default Footer;
