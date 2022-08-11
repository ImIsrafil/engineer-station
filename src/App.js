import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RequiredAuth from './Pages/RequiredAuth';
import Footer from './Pages/Shared/Footer';
import NavBar from './Pages/Shared/NavBar';
import Signup from './Pages/Signup';
import Spaces from './Pages/Spaces';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='spaces' element={
          <RequiredAuth>
            <Spaces />
          </RequiredAuth>
        } />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
