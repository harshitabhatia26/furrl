import React, { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './grid';

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|iPad|iPhone|iPod/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="not-mobile">
        <p>This application is only available on mobile devices.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
