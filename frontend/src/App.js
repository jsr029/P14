import React from 'react';
import './styles/main.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ViewCurrentEmployees from './pages/ViewCurrentEmployees';
import history from './history'

function App() {
  return (
    <Router history={history}>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/viewcurrentemployees" element={<ViewCurrentEmployees />} />
        </Routes>
    </Router>
  );
}


export default App;
