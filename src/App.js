import React, { useEffect, useState } from 'react';
import './App.css';
import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import newLogo from './newLogo.png'; // Import the new logo image

function App() {
  const [textSize, setTextSize] = useState('32px'); // Initial font size of the text

  useEffect(() => {
    document.title = "World Forum"; // Set the title when the component mounts

    // Dynamically update the favicon
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'icon';
    favicon.href = newLogo; // Use the imported new logo image
    document.head.appendChild(favicon);

    // Update textSize based on screen width
    const updateTextSize = () => {
      if (window.innerWidth <= 768) {
        setTextSize('24px'); // Adjust font size for smaller screens
      } else {
        setTextSize('32px'); // Default font size for larger screens
      }
    };

    updateTextSize(); // Initial call
    window.addEventListener('resize', updateTextSize); // Call on window resize

    return () => {
      // Optionally, revert favicon changes when the component unmounts
      document.head.removeChild(favicon);
      window.removeEventListener('resize', updateTextSize); // Remove event listener
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
<div className="App">
  <header className="App-header" style={{backgroundImage: `url(${photo2})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', height: '300px'}}>
    <div className="Photos" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
      <img src={photo1} alt="Placeholder Photo 1" style={{width: '100%', height: '30%'}} />
    </div>

    <div className="Photos">
      {/* If you have content for this div, you can add it here */}
    </div>

    <h1 style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', fontSize: textSize}}>Coming Soon!</h1>
  </header>
</div>


  );
}

export default App;
