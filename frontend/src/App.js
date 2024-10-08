import './App.css';
import ContextProvider from './Context/ContextProvider';
import ErrorBoundary from './Context/ErrorBoundry';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './Context/ContextProvider';
import Home from './Pages/BeforeLogin/Home';
import HomeLog from './Pages/AfterLogin/Home';
import Login from './Pages/BeforeLogin/Login';
import Logout from './Pages/AfterLogin/Logout';
import AboutUs from './Pages/BeforeLogin/AboutUs';
import ContactUs from './Pages/BeforeLogin/ContactUs';

function App() {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={<HomeLog />} />
            <Route path='/Logout' element={<Logout />} />
          </Routes>
        </Router>
      </ContextProvider>
    </ErrorBoundary>
  );
}

export default App;
