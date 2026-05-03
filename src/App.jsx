import React from 'react';
import CountdownTimer from './CountdownTimer';
import CurrentPortfolio from './CurrentPortfolio';
import PreviousDayResults from './PreviousDayResults';
import PerformanceHistory from './PerformanceHistory';
import PortfolioForm from './PortfolioForm';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Forex Portfolio Tracker</h1>
      <CountdownTimer />
      <CurrentPortfolio />
      <PreviousDayResults />
      <PerformanceHistory />
      <PortfolioForm />
    </div>
  );
};

export default App;