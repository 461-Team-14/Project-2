// Code started from this tutorial: https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications#step-2-creating-a-token-api

import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js';
import Login from './components/Login/Login.js';
import Preferences from './components/Preferences/Preferences.js';
import useToken from './components/App/useToken.js';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const {token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/preferences' element={<Preferences/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;