import React from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Email from './components/Email';
import Info from './components/Info';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container bg-gray-100">
      <Header />
      <main className="flex flex-col items-center w-full px-4 mt-10">
        <Board />
        <Email />
        <Info />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
