import React, { useState, useEffect } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Github from './components/Github/Github';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Menu from './components/Menu/Menu';

function App() {
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
  
    setTimeout(() => {
      setRemoveLoading(true);
    }, 2000);
  }, []);

  return (
    <div>
      {!removeLoading ? (
        <Loading />
      ) : (
        <>
         <Menu />
         <Header />
          <About />
          <Github />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;


