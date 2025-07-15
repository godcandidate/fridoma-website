import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Sell from './pages/Sell';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'explore' | 'sell'>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'explore':
        return <Explore />;
      case 'sell':
        return <Sell />;
      default:
        return <Landing onExploreClick={() => setCurrentPage('explore')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;