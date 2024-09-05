import React from 'react';
import './index.css';
import './App.css';
import Expert from './My Components/expert';
import Header from './My Components/header'; // Ensure path and capitalization
import Banner from './My Components/banner'; // Ensure path and capitalization

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Expert />
    </div>
  );
}

export default App;
