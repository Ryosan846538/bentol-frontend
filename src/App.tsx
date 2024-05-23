import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <AppRoutes />
            </Router>
        </div>
    );
};

export default App;
