import React from 'react';
import './styles/main.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ViewCurrentEmployees from './pages/ViewCurrentEmployees';

function App() {
  return (
    <Router>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/ViewCurrentEmployees" element={<ViewCurrentEmployees />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}


export default App;
