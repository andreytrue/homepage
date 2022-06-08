import React from 'react';
import '../../scss/index.scss';

import Header from '../header/Header';
import About from '../about/About';
import Facts from '../facts/Facts';
import Links from '../links/Links';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />

      <main className='app__main main'>
        <About />

        <Facts />

        <Links />
      </main>
      <Footer />
    </div>
  );
}

export default App;
