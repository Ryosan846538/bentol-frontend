import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
