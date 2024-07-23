import './App.css';
import ContextProvider from './Context/ContextProvider';
import ErrorBoundary from './Context/ErrorBoundry';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Context/ContextProvider';
import Home from './Pages/BeforeLogin/Home';
import Login from './Pages/BeforeLogin/Login';
import Logout from './Pages/AfterLogin/Logout';

function App() {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </ContextProvider>
    </ErrorBoundary>
  );
}

export default App;
